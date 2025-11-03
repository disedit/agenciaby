<script setup>
defineProps({ blok: Object })

const heroLoaded = ref(false)
</script>

<template>
  <header
    v-editable="blok"
    :class="[
      'relative overflow-clip min-h-svh flex justify-center items-center flex-col px-site py-6 -mt-nav',
      {
        'bg-black text-white': blok.scheme === 'dark',
        'bg-white text-black': blok.scheme === 'light',
      }
  ]">
    <h1 class="text-[1.07rem] md:text-2xl my-auto relative z-2">
      {{ blok.heading }}
    </h1>
    <UtilsRichText
      :content="blok.bottom"
      class="text-xxs md:text-base relative z-2"
    />
    <UtilsMedia
      :media="blok.background"
      @loaded="heroLoaded = true"
      class="absolute inset-0 z-1 opacity-25 h-full w-full object-cover"
    />
  </header>
</template>
