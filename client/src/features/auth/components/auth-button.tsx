import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useAuth } from "@/features/auth/context/auth-context";
import { UserMenu } from "./user-menu";
import { AuthModal } from "./auth-modal";

export const AuthButton = () => {
	const auth = useAuth();
	if (!auth) {
		return null;
	}

	const { user } = auth;

	if (user) {
		return <UserMenu />;
	}

	return (
		<AuthModal>
			<Button variant="white" size="default">
				<LogIn className="h-4 w-4" />
				Sign In
			</Button>
		</AuthModal>
	);
};
