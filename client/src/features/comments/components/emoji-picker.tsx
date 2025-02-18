import { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Smile } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

type EmojiMartData = {
	id: string;
	name: string;
	native: string;
	unified: string;
	keywords: string[];
	shortcodes: string;
	emoticons: string[];
};

export type EmojiPickerProps = {
	onEmojiSelect: (emoji: string) => void;
};

const EmojiPicker = ({ onEmojiSelect }: EmojiPickerProps) => {
	const [open, setOpen] = useState(false);

	const handleEmojiSelect = (emoji: EmojiMartData) => {
		onEmojiSelect(emoji.native);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Smile className="h-5 w-5" />
			</PopoverTrigger>
			<PopoverContent
				className="p-0 border-2 border-border"
				side="top"
				align="end"
				alignOffset={-10}
			>
				<Picker
					data={data}
					onEmojiSelect={handleEmojiSelect}
					theme="light"
					previewPosition="none"
					skinTonePosition="none"
					set="native"
				/>
			</PopoverContent>
		</Popover>
	);
};

export default EmojiPicker;
