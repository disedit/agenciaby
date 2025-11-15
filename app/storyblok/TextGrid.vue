<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="flex items-center justify-center px-site py-22 md:min-h-[75vh]">
    <ol class="grid gap-8 md:gap-20 md:grid-cols-3 max-w-276 w-full text-base md:text-bmx font-light">
      <li v-for="item in blok.items" :key="item._uid" v-editable="item" class="flex gap-8 leading-tight">
        <span class="whitespace-nowrap shrink-0">{{ item.number }}</span>
        <UtilsRichText :content="item.text" />
      </li>
    </ol>
  </section>
</template>
