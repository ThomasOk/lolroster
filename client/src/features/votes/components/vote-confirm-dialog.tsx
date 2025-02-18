import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type VoteConfirmDialogProps = {
	team: "blue" | "red";
	onConfirm: () => void;
	disabled?: boolean;
};

export const VoteConfirmDialog = ({
	team,
	onConfirm,
	disabled,
}: VoteConfirmDialogProps) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant={team === "blue" ? "blue" : "red"} disabled={disabled}>
					Vote {team === "blue" ? "Blue" : "Red"}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Confirm your vote</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to vote for {team === "blue" ? "Blue" : "Red"}{" "}
						team? This action cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>
						Confirm Vote
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
