import { ContentLayout } from "@/components/layouts/content-layout";

export const AboutRoute = () => {
	return (
		<ContentLayout>
			<div className="flex flex-col items-center gap-2">
				<h2 className="text-xl text-black font-black text-center mb-8 bg-white border-4 border-black py-2 px-6 shadow-xl inline-block transform -rotate-2">
					About
				</h2>
				<div className="prose prose-lg dark:prose-invert flex flex-col gap-6 max-w-3xl mx-auto px-4">
					<section className="text-center font-medium">
						<p className="text-md mb-6">
							⚠️ The app is currently under development.
						</p>
					</section>

					<section>
						<h3 className="text-lg font-bold mb-2">❓ What is it?</h3>
						<p>
							The idea is to create daily hypothetical matchups between
							professional League of Legends players, and you get to vote for
							the best team!
						</p>
						<p>
							Each team is randomly generated from a selection of pro players.
							Currently, only players from the European League (LEC) are
							included.
						</p>
					</section>

					<section className="mt-4">
						<h3 className="text-lg font-bold mb-2">🔜 What's coming next?</h3>
						<p>
							Upcoming updates will introduce features such as matchups history
							and an improved comment section.
						</p>
					</section>
				</div>
			</div>
		</ContentLayout>
	);
};

export default AboutRoute;
