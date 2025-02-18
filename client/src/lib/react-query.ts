import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: true,
		retry: false,
		staleTime: 1000 * 30, // 30s
	},
};
