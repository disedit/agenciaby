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
        'text-base': blok.text_size === 'base',
        'text-md': blok.text_size === 'md',
        'text-lg': blok.text_size === 'lg',
        'text-xl leading-none': blok.text_size === 'xl',
        'text-2xl leading-none': blok.text_size === '2xl',
        'text-3xl leading-none': blok.text_size === '3xl',
        'md:text-sm': blok.text_size === 'sm',
        'md:text-base': blok.text_size_desktop === 'base',
        'md:text-md': blok.text_size_desktop === 'md',
        'md:text-lg': blok.text_size_desktop === 'lg',
        'md:text-xl leading-none': blok.text_size_desktop === 'xl',
        'md:text-2xl leading-none': blok.text_size_desktop === '2xl',
        'md:text-3xl leading-none': blok.text_size_desktop === '3xl',
      }
    ]"
    :style="{
      '--pt': blok.padding_top,
      '--pb': blok.padding_bottom,
      '--pt-md': blok.padding_top_desktop,
      '--pb-md': blok.padding_bottom_desktop
    }"
  >
    {{ blok.headline }}
  </Component>
</template>
