<script setup>
const props = defineProps({ blok: Object })

const hTag = computed(() => `h${props.blok.h_level}`)
</script>

<template>
  <Component
    v-editable="blok"
    :is="hTag"
    :class="[
      'whitespace-break-spaces',
      {
        'text-base': blok.text_size === 'base',
        'text-md': blok.text_size === 'md',
        'text-lg': blok.text_size === 'lg',
        'text-xl leading-none': blok.text_size === 'xl',
        'text-2xl leading-none': blok.text_size === '2xl',
        'text-3xl leading-none': blok.text_size === '3xl'
      }
    ]"
  >
    {{ blok.headline }}
  </Component>
</template>
