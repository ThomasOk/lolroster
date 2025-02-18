import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";

const TOAST_IDS = {
	success: "auth-success-toast",
	cancelled: "auth-cancelled-toast",
};

export const AuthHandler = () => {
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const authStatus = searchParams.get("auth_status");

		if (authStatus) {
			switch (authStatus) {
				case "success":
					toast("Successfully signed in", {
						description: "You are now connected.",
						id: TOAST_IDS.success,
					});
					break;
				case "cancelled":
					toast("Authentication cancelled", {
						description: "Access was denied.",
						id: TOAST_IDS.cancelled,
					});
					break;
			}

			window.history.replaceState({}, document.title, window.location.pathname);
		}
	}, [searchParams]);

	return null;
};
