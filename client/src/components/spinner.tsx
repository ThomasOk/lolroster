import { LoaderCircle } from "lucide-react";

export const Spinner = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<LoaderCircle className="h-16 w-16 animate-spin" />
		</div>
	);
};
