<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      'grid spacing',
      {
        'md:grid-cols-2': blok.columns === '2',
        'md:grid-cols-3': blok.columns === '3',
        'gap-12 md:gap-6': blok.gap,
        'px-site': blok.padding,
        'bg-white': blok.background_color === 'white',
        'bg-gray': blok.background_color === 'gray',
        'bg-black text-white': blok.background_color === 'black',
      }
    ]"
    :style="{
      '--pt': blok.padding_top  || 0,
      '--pb': blok.padding_bottom  || 0,
      '--pt-md': blok.padding_top_desktop  || 0,
      '--pb-md': blok.padding_bottom_desktop || 0,
      '--mt': blok.margin_top || '4.5rem',
      '--mb': blok.margin_bottom || '4.5rem',
      '--mt-md': blok.margin_top_desktop || '5.5rem',
      '--mb-md': blok.margin_bottom_desktop || '5.5rem'
    }"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </section>
</template>
