<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="flex items-center justify-center px-site py-22 min-h-[90vh]">
    <ol class="grid gap-20 grid-cols-3 max-w-276 w-full text-bmx font-light">
      <li v-for="item in blok.items" :key="item._uid" v-editable="item" class="flex gap-8 leading-tight">
        <span class="whitespace-nowrap shrink-0">{{ item.number }}</span>
        <UtilsRichText :content="item.text" />
      </li>
    </ol>
  </section>
</template>
