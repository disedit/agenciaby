<script setup>
const props = defineProps({ blok: Object })

const hTag = computed(() => `h${props.blok.h_level}`)
</script>

<template>
  <Component
    v-editable="blok"
    :is="hTag"
    :class="[
      'whitespace-break-spaces spacing',
      {
        'text-sm': blok.text_size === 'sm',
        'text-smbase': blok.text_size === 'smbase',
        'text-base': blok.text_size === 'base',
        'text-basemd': blok.text_size === 'basemd',
        'text-md': blok.text_size === 'md',
        'text-lg': blok.text_size === 'lg',
        'text-xl leading-none': blok.text_size === 'xl',
        'text-2xl leading-none': blok.text_size === '2xl',
        'text-3xl leading-none': blok.text_size === '3xl',
        'md:text-sm': blok.text_size === 'sm',
        'md:text-smbase': blok.text_size_desktop === 'smbase',
        'md:text-base': blok.text_size_desktop === 'base',
        'md:text-basemd': blok.text_size_desktop === 'basemd',
        'md:text-md': blok.text_size_desktop === 'md',
        'md:text-lg': blok.text_size_desktop === 'lg',
        'md:text-xl leading-none': blok.text_size_desktop === 'xl',
        'md:text-2xl leading-none': blok.text_size_desktop === '2xl',
        'md:text-3xl leading-none': blok.text_size_desktop === '3xl',
      }
    ]"
    :style="{
      '--pt': blok.padding_top  || 0,
      '--pb': blok.padding_bottom  || 0,
      '--pt-md': blok.padding_top_desktop  || 0,
      '--pb-md': blok.padding_bottom_desktop || 0,
      '--mt': blok.margin_top || 0,
      '--mb': blok.margin_bottom || 0,
      '--mt-md': blok.margin_top_desktop || 0,
      '--mb-md': blok.margin_bottom_desktop || 0
    }"
  >
    {{ blok.headline }}
  </Component>
</template>
