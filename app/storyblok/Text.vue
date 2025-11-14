<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsRichText
    v-editable="blok" 
    :content="blok.text"
    :class="[
      'spacing spaced-paragraphs text-pretty whitespace-pre-wrap max-w-(--max-chars)',
      {
        'text-sm': blok.text_size === 'sm',
        'text-base': blok.text_size === 'base',
        'text-md': blok.text_size === 'md',
        'text-lg': blok.text_size === 'lg',
        'text-xl': blok.text_size === 'xl',
        'text-2xl': blok.text_size === '2xl',
        'text-3xl': blok.text_size === '3xl',
        'md:text-sm': blok.text_size === 'sm',
        'md:text-base': blok.text_size_desktop === 'base',
        'md:text-md': blok.text_size_desktop === 'md',
        'md:text-lg': blok.text_size_desktop === 'lg',
        'md:text-xl': blok.text_size_desktop === 'xl',
        'md:text-2xl': blok.text_size_desktop === '2xl',
        'md:text-3xl': blok.text_size_desktop === '3xl',
        'font-light': blok.text_weight === 'light',
        'font-normal': blok.text_weight === 'normal',
        'font-medium': blok.text_weight === 'medium',
        'font-semibold': blok.text_weight === 'semibold',
        'font-bold': blok.text_weight === 'bold',
        'leading-none': blok.leading === 'none',
        'leading-tight': blok.leading === 'tight',
        'leading-snug': blok.leading === 'snug',
        'leading-normal': blok.leading === 'normal',
        'leading-relaxed': blok.leading === 'relaxed',
        'leading-loose': blok.leading === 'loose',
        'self-end': blok.align === 'end',
        'self-center': blok.align === 'center',
        'justify-self-end text-right': blok.justify === 'end',
        'justify-self-center': blok.justify === 'center',
      }
    ]"
    :style="{
      '--max-chars': blok.max_chars ? `${blok.max_chars}ch` : null,
      '--pt': blok.padding_top,
      '--pb': blok.padding_bottom,
      '--pt-md': blok.padding_top_desktop,
      '--pb-md': blok.padding_bottom_desktop
    }"
  />
</template>
