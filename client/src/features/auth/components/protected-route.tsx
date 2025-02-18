import { Navigate } from "react-router";
import { useAuth } from "@/features/auth/context/auth-context";
import { ReactNode } from "react";

type ProtectedRouteProps = {
	children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const auth = useAuth();
	if (!auth) {
		return null;
	}

	const { user, isLoading } = auth;

	if (isLoading) return <div>Chargement...</div>;
	if (!user) return <Navigate to="/login" replace />;

	return children;
};
