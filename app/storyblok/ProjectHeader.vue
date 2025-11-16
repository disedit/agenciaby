<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header
    v-editable="blok"
    class="px-site pt-14 md:pt-26 pb-12 md:pb-16"
  >
    <h1 class="text-2xl md:text-3xl max-w-[15ch] leading-none mb-12 md:mb-16">
      {{ blok.heading }}
    </h1>
    <div class="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-site font-light text-sm md:text-base leading-tight">
      <div class="whitespace-pre text-[.9em]">{{ blok.text_left }}</div>
      <UtilsRichText :content="blok.text_center" class="text-[.9em] row-span-2" />
      <div class="whitespace-pre md:text-right text-[.9em] self-end">{{ blok.text_right }}</div>
    </div>
  </header>
</template>
