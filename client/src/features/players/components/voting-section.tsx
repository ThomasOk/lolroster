import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export const VotingSection = ({
	blueVotes,
	redVotes,
	onBlueVote,
	onRedVote,
	disabled = false,
}: {
	blueVotes: number;
	redVotes: number;
	onBlueVote: () => void;
	onRedVote: () => void;
	disabled?: boolean;
}) => {
	const totalVotes = blueVotes + redVotes;
	const bluePercentage = totalVotes === 0 ? 50 : (blueVotes / totalVotes) * 100;
	const redPercentage = totalVotes === 0 ? 50 : (redVotes / totalVotes) * 100;

	return (
		<>
			<Button variant="blue" onClick={onBlueVote} disabled={disabled}>
				Vote Blue
			</Button>
			<div className="flex items-center gap-2 w-[80%]">
				{!disabled && (
					<div className="flex flex-col items-center text-sm">
						<span className="font-bold">{bluePercentage.toFixed(1)}%</span>
						<span className="font-medium">({blueVotes})</span>
					</div>
				)}
				<Progress
					className="h-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
					value={disabled ? 50 : bluePercentage}
				/>
				{!disabled && (
					<div className="flex flex-col text-sm">
						<span className="font-bold">{redPercentage.toFixed(1)}%</span>
						<span className="font-medium">({redVotes})</span>
					</div>
				)}
			</div>
			<Button variant="red" onClick={onRedVote} disabled={disabled}>
				Vote Red
			</Button>
		</>
	);
};
