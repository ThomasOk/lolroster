import { ThemeProvider } from "@/components/theme/theme-provider";
import { type ReactNode } from "react";

type AppProviderProps = {
	children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{children}
		</ThemeProvider>
	);
};
