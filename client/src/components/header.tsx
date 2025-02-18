import { paths } from "@/config/paths";
import { Link } from "react-router";
import { AuthButton } from "@/features/auth/components/auth-button";

export const Header = () => {
	return (
		<nav className="border-b-4 flex justify-center items-center gap-8 p-6 mb-2 font-semibold text-lg">
			<div className="flex gap-8">
				<Link to={paths.home.path}>Today</Link>
				<Link to={paths.about.path}>About</Link>
			</div>
			<div className="absolute right-6">
				<AuthButton />
			</div>
		</nav>
	);
};
