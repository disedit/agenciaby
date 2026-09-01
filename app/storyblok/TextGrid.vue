<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="flex items-center justify-center px-site py-22 md:min-h-[75vh]">
    <ol class="grid gap-8 md:gap-20 md:grid-cols-3 max-w-276 w-full text-base md:text-basemd font-light">
      <li
        v-for="item in blok.items"
        :key="item._uid"
        v-editable="item"
        class="flex gap-8 leading-tight"
        :class="{
          'text-xs': item.text_size === 'xs',
          'text-sm': item.text_size === 'sm',
          'text-smbase': item.text_size === 'smbase',
          'text-base': item.text_size === 'base',
          'text-basemd': item.text_size === 'basemd',
          'text-md': item.text_size === 'md',
          'text-lg': item.text_size === 'lg',
          'text-xl': item.text_size === 'xl',
          'text-2xl': item.text_size === '2xl',
          'text-3xl': item.text_size === '3xl',
          'md:text-xs': item.text_size_desktop === 'xs',
          'md:text-sm': item.text_size_desktop === 'sm',
          'md:text-smbase': item.text_size_desktop === 'smbase',
          'md:text-base': item.text_size_desktop === 'base',
          'md:text-basemd': item.text_size_desktop === 'basemd',
          'md:text-md': item.text_size_desktop === 'md',
          'md:text-lg': item.text_size_desktop === 'lg',
          'md:text-xl': item.text_size_desktop === 'xl',
          'md:text-2xl': item.text_size_desktop === '2xl',
          'md:text-3xl': item.text_size_desktop === '3xl',
        }"
      >
        <span class="whitespace-nowrap shrink-0">{{ item.number }}</span>
        <UtilsRichText :content="item.text" />
      </li>
    </ol>
  </section>
</template>
