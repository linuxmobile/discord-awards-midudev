// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image", "nuxt-marquee"],
	css: ["@unocss/reset/tailwind.css"],
	app: {
		head: {
			viewport: "width=device-width, initial-scale=1",
			charset: "utf-8",
		},
	},
});
