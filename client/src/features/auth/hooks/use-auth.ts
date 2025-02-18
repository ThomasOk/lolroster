import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as authService from "../api/auth-service";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const authKeys = {
	user: ["user"] as const,
};

export function useAuth() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { data: user, isLoading } = useQuery({
		queryKey: authKeys.user,
		queryFn: authService.getCurrentUser,
		retry: false,
		staleTime: Infinity,
	});

	const { mutate: logout } = useMutation({
		mutationFn: authService.logout,
		onSuccess: () => {
			queryClient.setQueryData(authKeys.user, null);
			navigate("/");
			toast.success("Successfully logged out");
		},
		onError: () => {
			toast.error("Error during logout");
		},
	});

	return {
		user,
		isAuthenticated: !!user,
		isLoading,
		logout,
	};
}
