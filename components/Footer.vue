<template>
  <footer class="w-full flex items-center justify-between mt-12 py-3 px-4 border-t border-green-500 font-mono">
    <div class="flex items-center justify-center gap-x-3">
      <NuxtLink
        href="https://github.com/linuxmobile/discord-awards-midu"
        target="_blank"
        aria-label="Link to linuxmobile GitHub"><IconsGithub class="size-7"/></NuxtLink>
      <NuxtLink
        href="https://discord.gg/midudev"
        target="_blank"
        aria-label="Link to midudev Discord Community"><IconsDiscord class="size-7"/></NuxtLink>
    </div>
    <div class="flex items-center justify-center gap-x-5">
      <p class="">Contribuir</p>
      <p class="">FAQs</p>
      <p class="">Privacy Policy</p>
      <p class="flex items-center justify-center gap-x-3"><IconsCopyright class="size-5"/>{{currentYear}}</p>
      <IconsNuxtIcon />
    </div>
  </footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
