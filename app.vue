<template>
  <NuxtPage />
</template>
<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: "bg-black text-white font-sans",
	},
});
useSeoMeta({
	title: "Discord Awards Midudev",
	description:
		"Únete a la comunidad de Midudev y participa en las votaciones más divertidas en los Discord Awards Midudev.",
	author: "@linuxmobile",
});
</script>
<style>
@font-face {
  font-family: 'Array';
  src: url(/assets/Array.woff2);
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: 'Clash Display';
  src: url(/assets/ClashDisplay.woff2);
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: 'Satoshi';
  src: url(/assets/Satoshi.woff2);
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url(/assets/JetBrainsMono.woff2);
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
</style>
