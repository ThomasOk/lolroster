import { BrowserRouter, Routes, Route } from "react-router";
import { paths } from "@/config/paths";
import { Suspense, lazy } from "react";
import { AuthProvider } from "@/features/auth/context/auth-context";
import { Spinner } from "@/components/spinner";
import { SetupRoute } from "@/features/auth/components/setup-route";

const LandingRoute = lazy(() => import("./routes/landing"));
const AboutRoute = lazy(() => import("./routes/about"));
const UserInfoSetupRoute = lazy(() => import("./routes/user-info-setup"));
const NotFoundPage = lazy(() => import("./routes/not-found"));

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path={paths.home.path} element={<LandingRoute />} />
						<Route path={paths.about.path} element={<AboutRoute />} />
						<Route
							path={paths.auth.userInfoSetup.path}
							element={
								<SetupRoute>
									<UserInfoSetupRoute />
								</SetupRoute>
							}
						/>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default NotFoundPage;
