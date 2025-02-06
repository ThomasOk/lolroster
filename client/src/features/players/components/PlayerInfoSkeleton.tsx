import { cn } from "@/lib/utils";

const PlayerInfoSkeleton = ({
	backgroundColor,
}: {
	backgroundColor: string;
}) => (
	<div className="relative flex flex-col items-center px-2 pt-2 pb-2 border-2 bg-white shadow-lg text-black">
		<div className="flex flex-col items-center max-w-[145px]">
			<div
				className={cn(
					"w-36 h-36 sm:w-24 sm:h-24 md:w-36 md:h-36 border-2",
					backgroundColor,
					"animate-pulse bg-gray-200"
				)}
			/>
			<div className="w-20 h-4 bg-gray-200 rounded mt-2 animate-pulse" />
			<div className="w-4 h-4 bg-gray-200 rounded mt-2 animate-pulse" />
		</div>
	</div>
);
export default PlayerInfoSkeleton;
