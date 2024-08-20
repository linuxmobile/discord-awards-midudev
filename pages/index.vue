<script setup lang="ts">
const route = useRoute();
import IconsDiscord from "~/components/icons/Discord.vue";
</script>
<template>
  <Header />
  <Hero />
  <div class="w-full flex items-center justify-center gap-x-18 py-24">
    <UiButton />
    <UiButton :icon="IconsDiscord" text-color="text-white" background-color="bg-purple-500" textContent="Ingresar con Discord" />
  </div>
  <Intro />
  <Footer />
</template>
