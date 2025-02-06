import { countryToAlpha2 } from "country-to-iso";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

export const countryToEmoji = (country: string) => {
	const countryCode = countryToAlpha2(country);
	polyfillCountryFlagEmojis();
	return countryCode
		?.split("")
		.map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
		.map((emojiCode) => String.fromCodePoint(emojiCode))
		.join("");
};
