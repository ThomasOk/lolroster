import { createContext, ReactNode, useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router";
import { api as ApiClient } from "@/lib/api-client";
import { User } from "@/features/auth/types/auth-types";
import { toast } from "sonner";

type AuthProviderProps = {
	children: ReactNode;
};

type AuthContextType = {
	user: User | undefined;
	isLoading: boolean;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const location = useLocation();
	const isSetupPage = location.pathname === "/user-info-setup";

	const { data: user, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await ApiClient.get<User>("/users/me");
			return res;
		},
		retry: false,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	});

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const authStatus = params.get("auth_status");

		if (authStatus) {
			// do nothing if in setup page
			if (authStatus === "success" && isSetupPage) {
				return;
			}

			switch (authStatus) {
				case "success":
					if (user) {
						queryClient.invalidateQueries({ queryKey: ["user"] });
						toast.success("Successfully signed in", {
							description: "You are now connected.",
						});
						navigate("/", { replace: true });
					}
					break;
				case "cancelled":
					toast.error("Authentication cancelled", {
						description: "Access was denied.",
					});
					navigate("/", { replace: true });
					break;
			}

			// On clean history if we are not in setup page
			if (!isSetupPage) {
				window.history.replaceState(
					{},
					document.title,
					window.location.pathname
				);
			}
		}
	}, [location.search, user, queryClient, navigate, isSetupPage]);

	// Redirect to setup page if necessary
	useEffect(() => {
		if (user && !user.displayName && !isSetupPage) {
			navigate("/user-info-setup", { replace: true });
		}
	}, [user, isSetupPage, navigate]);

	const logout = async () => {
		try {
			await ApiClient.post("/auth/logout");
			queryClient.setQueryData(["user"], null);
			queryClient.invalidateQueries({ queryKey: ["user"] });
			toast.success("Successfully logged out");
			navigate("/");
		} catch (error) {
			console.error(error);
			toast.error("Error during logout");
		}
	};

	return (
		<AuthContext.Provider value={{ user, isLoading, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
