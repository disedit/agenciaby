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
        'text-smbase': blok.text_size === 'smbase',
        'text-base': blok.text_size === 'base',
        'text-basemd': blok.text_size === 'basemd',
        'text-md': blok.text_size === 'md',
        'text-lg': blok.text_size === 'lg',
        'text-xl': blok.text_size === 'xl',
        'text-2xl': blok.text_size === '2xl',
        'text-3xl': blok.text_size === '3xl',
        'md:text-sm': blok.text_size_desktop === 'sm',
        'md:text-smbase': blok.text_size_desktop === 'smbase',
        'md:text-base': blok.text_size_desktop === 'base',
        'md:text-basemd': blok.text_size_desktop === 'basemd',
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
        'md:self-end': blok.align === 'end',
        'md:self-center': blok.align === 'center',
        'md:justify-self-end md:text-right': blok.justify === 'end',
        'md:justify-self-center': blok.justify === 'center',
      }
    ]"
    :style="{
      '--max-chars': blok.max_chars ? `${blok.max_chars}ch` : null,
      '--pt': blok.padding_top  || 0,
      '--pb': blok.padding_bottom  || 0,
      '--pt-md': blok.padding_top_desktop  || 0,
      '--pb-md': blok.padding_bottom_desktop || 0,
      '--mt': blok.margin_top || 0,
      '--mb': blok.margin_bottom || 0,
      '--mt-md': blok.margin_top_desktop || 0,
      '--mb-md': blok.margin_bottom_desktop || 0
    }"
  />
</template>
