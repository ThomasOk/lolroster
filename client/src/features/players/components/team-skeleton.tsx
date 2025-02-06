import { PlayerInfoSkeleton } from "@/features/players/components/player-info-skeleton";

export const TeamSkeleton = ({
	backgroundColor,
}: {
	backgroundColor: string;
}) => (
	<div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-1">
		{[...Array(5)].map((_, index) => (
			<div key={index}>
				<PlayerInfoSkeleton backgroundColor={backgroundColor} />
			</div>
		))}
	</div>
);
