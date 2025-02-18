import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { useState, type ReactNode } from "react";
import { queryConfig } from "@/lib/react-query";
import { Toaster } from "@/components/ui/sonner";

type AppProviderProps = {
	children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [queryClient] = useState(
		() => new QueryClient({ defaultOptions: queryConfig })
	);
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
				{children}
				<Toaster
					toastOptions={{
						className: "border-2 border-black text-black",
						style: {
							background: "white",
						},
					}}
				/>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
