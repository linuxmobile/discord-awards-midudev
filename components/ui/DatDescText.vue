<template>
  <div class="uppercase min-h-dvh w-full flex flex-col items-center justify-center text-9xl font-black font-display leading-25 relative">
    <div class="bg-purple-600 w-256 h-122 absolute -z-1 blur-[550px] opacity-30 rounded-full"></div>
    <p class="text-32 text-green-500">Arrancamos</p>
    <div class="flex items-center justify-center text-73 pt-16">
      <p class="text-purple-500">15</p>
      <p class="">NOV</p>
    </div>
    <NuxtMarquee
      :autoFill="true" :speed="100" :loop="0" :pauseOnHover="true"
      class="w-full h-full relative flex items-center justify-center [&_img]:w-50">
      <NuxtImg src="/assets/stickers/boludo.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/cuidao.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/gpt.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/hablacausa.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/heart.png" aria-label="stickers" class="ml-2"/>
      <NuxtImg src="/assets/stickers/light.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/quepasa.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/sorry.png" aria-label="stickers" />
      <NuxtImg src="/assets/stickers/tatogucci.png" aria-label="stickers" />
    </NuxtMarquee>
  </div>
</template>
