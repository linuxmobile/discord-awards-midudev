<template>
  <div :class="[backgroundColor, textColor]" class="p-4 rounded-full flex items-center justify-center gap-x-3 text-xl font-mono">
    <component :is="icon" class="size-7" />
    <p>{{textContent}}</p>
  </div>
</template>
<script setup lang="ts">
import IconsGithub from "~/components/icons/Github.vue";
const props = defineProps({
	backgroundColor: {
		type: String,
		default: "bg-green-500",
	},
	textColor: {
		type: String,
		default: "text-black",
	},
	textContent: {
		type: String,
		default: "Ingresar con Github",
	},
	icon: {
		type: Object,
		default: IconsGithub,
	},
});
</script>
