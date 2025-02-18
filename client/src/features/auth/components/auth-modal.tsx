import { DISCORD_AUTH_URL, GOOGLE_AUTH_URL } from "@/config/constants";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DiscordIcon from "@/features/auth/assets/discord-icon.svg";
import GoogleIcon from "@/features/auth/assets/google-icon.svg";
import { ReactNode } from "react";

type AuthModalProps = {
	children: ReactNode;
};

export const AuthModal = ({ children }: AuthModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className="border-2 border-border bg-gray-100">
				<DialogHeader>
					<DialogTitle className="text-xl font-bold">Sign In</DialogTitle>
				</DialogHeader>

				<div className="flex flex-col gap-4">
					<p className="text-sm text-gray-800">
						Sign in to vote and comment on matchups.
					</p>

					<Button
						onClick={() => (window.location.href = DISCORD_AUTH_URL)}
						className="w-full"
						variant="white"
					>
						<DiscordIcon />
						Continue with Discord
					</Button>

					<Button
						onClick={() => (window.location.href = GOOGLE_AUTH_URL)}
						className="w-full"
						variant="white"
					>
						<GoogleIcon />
						Continue with Google
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
