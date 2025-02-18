import { Navigate } from "react-router";
import { useAuth } from "@/features/auth/context/auth-context";
import { ReactNode } from "react";

type SetupRouteProps = {
	children: ReactNode;
};

export const SetupRoute = ({ children }: SetupRouteProps) => {
	const auth = useAuth();
	if (!auth) return null;

	const { user, isLoading } = auth;

	if (isLoading) return <div>Loading...</div>;

	// If user not logged in, redirect to home
	if (!user) {
		return <Navigate to="/" replace />;
	}

	if (user.displayName) {
		return <Navigate to="/" replace />;
	}

	// Else, display setup page
	return children;
};
