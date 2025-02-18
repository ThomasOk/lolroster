import { ContentLayout } from "@/components/layouts/content-layout";
import { MatchCard } from "@/features/matchups/components/matchup-card";

export const LandingRoute = () => {
	return (
		<ContentLayout>
			<MatchCard />
		</ContentLayout>
	);
};

export default LandingRoute;
