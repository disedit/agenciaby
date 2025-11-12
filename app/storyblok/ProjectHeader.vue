<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header
    v-editable="blok"
    class="px-site pt-26 pb-16"
  >
    <h1 class="text-3xl max-w-[15ch] leading-none mb-16">
      {{ blok.heading }}
    </h1>
    <div class="grid grid-cols-[2fr_1fr_1fr] gap-site font-light text-base leading-tight">
      <div class="whitespace-pre text-[.9em]">{{ blok.text_left }}</div>
      <UtilsRichText :content="blok.text_center" class="text-[.9em]" />
      <div class="whitespace-pre text-right text-[.9em]">{{ blok.text_right }}</div>
    </div>
  </header>
</template>
