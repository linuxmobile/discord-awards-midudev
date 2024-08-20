import { defineConfig, presetWind } from "unocss";
import { presetAnimations } from "unocss-preset-animations";

export default defineConfig({
	presets: [presetWind(), presetAnimations()],
	theme: {
		colors: {
			green: {
				50: "#FBFEEB",
				100: "#F6FDD3",
				200: "#EDFBA7",
				300: "#E4F97B",
				400: "#DCF754",
				500: "#D3F527",
				600: "#B9DB0A",
				700: "#87A107",
				800: "#5A6B05",
				900: "#2D3602",
				950: "#191D01",
			},
			orange: {
				50: "#FFF4E5",
				100: "#FFEAD1",
				200: "#FFD39E",
				300: "#FFBF70",
				400: "#FFA83D",
				500: "#FF930F",
				600: "#D67600",
				700: "#A35A00",
				800: "#6B3B00",
				900: "#381F00",
				950: "#190E00",
			},
			purple: {
				50: "#EFECFE",
				100: "#DAD4FC",
				200: "#B6A8FA",
				300: "#917DF7",
				400: "#6D52F5",
				500: "#4A28F2",
				600: "#2E0DD4",
				700: "#220A9F",
				800: "#17066A",
				900: "#0B0335",
				950: "#06021D",
			},
		},
	},
});
