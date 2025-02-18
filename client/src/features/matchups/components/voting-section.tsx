import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/features/auth/context/auth-context";
import { AuthModal } from "@/features/auth/components/auth-modal";
import { VoteConfirmDialog } from "../../votes/components/vote-confirm-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type VoteButtonProps = {
	team: "blue" | "red";
	onClick: () => void;
	disabled?: boolean;
	isVoting?: boolean;
	userVote?: "blue" | "red";
};

const VoteButton = ({
	team,
	onClick,
	disabled,
	isVoting,
	userVote,
}: VoteButtonProps) => {
	const auth = useAuth();
	if (!auth?.user) {
		return (
			<AuthModal>
				<Button variant={team === "blue" ? "blue" : "red"} disabled={disabled}>
					Vote {team === "blue" ? "Blue" : "Red"}
				</Button>
			</AuthModal>
		);
	}

	if (userVote) {
		return (
			<Button
				variant={team === "blue" ? "blue" : "red"}
				// disabled={true}
				onClick={() =>
					toast.info(`You have already voted for the ${userVote} team`)
				}
			>
				Vote {team === "blue" ? "Blue" : "Red"}
			</Button>
		);
	}

	return (
		<VoteConfirmDialog
			team={team}
			onConfirm={onClick}
			disabled={disabled || isVoting}
		/>
	);
};

export const VotingSection = ({
	blueVotes,
	redVotes,
	onBlueVote,
	onRedVote,
	disabled = false,
	isVoting = false,
	userVote,
}: {
	blueVotes: number;
	redVotes: number;
	onBlueVote: () => void;
	onRedVote: () => void;
	disabled?: boolean;
	isVoting?: boolean;
	userVote?: "blue" | "red";
}) => {
	const totalVotes = blueVotes + redVotes;
	const bluePercentage = totalVotes === 0 ? 50 : (blueVotes / totalVotes) * 100;
	const redPercentage = totalVotes === 0 ? 50 : (redVotes / totalVotes) * 100;

	return (
		<>
			<VoteButton
				team="blue"
				onClick={onBlueVote}
				disabled={disabled}
				isVoting={isVoting}
				userVote={userVote}
			/>

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

			<VoteButton
				team="red"
				onClick={onRedVote}
				disabled={disabled}
				isVoting={isVoting}
				userVote={userVote}
			/>

			{/* {userVote && (
				<p className="text-sm text-center mt-2">
					You have voted for the {userVote} team
				</p>
			)} */}
		</>
	);
};
