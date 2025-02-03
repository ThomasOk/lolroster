import { NavbarAction } from "./navbar-actions";

export const Navbar = () => {
	return (
		<nav className="border flex justify-center items-center gap-8">
			<div>TotoBrand</div>
			<NavbarAction />
		</nav>
	);
};
