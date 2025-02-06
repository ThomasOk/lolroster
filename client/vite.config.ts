import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import commonjs from "vite-plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		commonjs(),
		react(),
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				exportType: "default",
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: "**/*.svg",
		}),
	],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
