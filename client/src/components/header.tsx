import { paths } from "@/config/paths";
import { Link } from "react-router";

export const Header = () => {
	return (
		<nav className="border flex justify-center items-center gap-8">
			<Link to={paths.home.path}>Today</Link>
			<Link to={paths.about.path}>About</Link>
		</nav>
	);
};
