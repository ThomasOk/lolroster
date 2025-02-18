import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, UserRound } from "lucide-react";
import { useAuth } from "@/features/auth/context/auth-context";

export const UserMenu = () => {
	const auth = useAuth();
	if (!auth) return null;

	const { user, logout } = auth;
	const displayedName = user?.displayName || "NewUser";

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="noShadow" className="gap-2">
					<UserRound className="h-4 w-4" />
					<span className="hidden sm:inline">{displayedName}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={logout} className="cursor-pointer">
					<LogOut className="mr-2 h-4 w-4" />
					<span>Sign Out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserMenu;
