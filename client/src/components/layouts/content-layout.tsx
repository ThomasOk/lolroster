import { Navbar } from "./navbar/navbar";

type ContentLayoutProps = {
	children: React.ReactNode;
	//title: string;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
	return (
		<>
			<div>
				<Navbar />
				<main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
					{children}
				</main>
			</div>
		</>
	);
};
