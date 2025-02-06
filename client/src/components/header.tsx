import { paths } from "@/config/paths";
import { Link } from "react-router";

export const Header = () => {
	return (
		<nav className="border-b-4 flex justify-center items-center gap-8 p-6 mb-2 font-semibold text-lg">
			<Link to={paths.home.path}>Today</Link>
			<Link to={paths.about.path}>About</Link>
		</nav>
	);
};
