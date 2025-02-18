import { Header } from "@/components/header";
//import { AuthHandler } from "@/features/auth/components/auth-handler";

type ContentLayoutProps = {
	children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
	return (
		<>
			<div>
				<Header />
				{/* <AuthHandler /> */}
				<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
					{children}
				</main>
			</div>
		</>
	);
};
