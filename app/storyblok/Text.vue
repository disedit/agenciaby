<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsRichText
    v-editable="blok" 
    :content="blok.text"
    :class="[
      'spaced-paragraphs text-pretty whitespace-pre-wrap max-w-(--max-chars)',
      {
        'text-sm leading-snug': blok.text_size === 'sm',
        'text-base leading-tight': blok.text_size === 'base',
        'text-md leading-tight': blok.text_size === 'md',
        'self-end': blok.align === 'end',
        'self-center': blok.align === 'center',
        'justify-self-end text-right': blok.justify === 'end',
        'justify-self-center': blok.justify === 'center',
        'font-light': blok.text_weight === 'light',
        'font-normal': blok.text_weight === 'normal',
        'font-medium': blok.text_weight === 'medium',
        'font-semibold': blok.text_weight === 'semibold',
        'font-bold': blok.text_weight === 'bold',
      }
    ]"
    :style="{
      '--max-chars': blok.max_chars ? `${blok.max_chars}ch` : null
    }"
  />
</template>
