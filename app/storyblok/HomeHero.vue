<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header :class="[
    'min-h-svh flex justify-center items-center flex-col px-site py-6',
    {
      'bg-black text-white': blok.scheme === 'dark',
      'bg-white text-black': blok.scheme === 'light',
    }
  ]">
    <h1 class="text-[1.07rem] md:text-2xl my-auto">
      {{ blok.heading }}
    </h1>
    <UtilsRichText :content="blok.bottom" class="text-xxs md:text-base" />
  </header>
</template>
