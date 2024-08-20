<template>
  <div class="uppercase min-h-dvh w-full flex flex-col items-center justify-center text-9xl font-black font-display leading-25">
    <p class="text-purple-500">Discord</p>
    <p class="text-white">Awards</p>
    <p class="text-purple-500">midudev</p>
    <p class="text-55 pt-8 text-green-500">{{currentYear}}</p>
  </div>
</template>
<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
</script>
