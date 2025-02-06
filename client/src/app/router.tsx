import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { paths } from "@/config/paths";

const router = createBrowserRouter([
	{
		path: paths.home.path,
		lazy: async () => {
			const { LandingRoute } = await import("./routes/landing");
			return { Component: LandingRoute };
		},
	},
	{
		path: paths.about.path,
		lazy: async () => {
			const { AboutRoute } = await import("./routes/about");
			return { Component: AboutRoute };
		},
	},
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
