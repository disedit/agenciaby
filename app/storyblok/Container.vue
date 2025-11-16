<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      'flex flex-col spacing',
      {
        'bg-white': blok.background_color === 'white',
        'bg-gray': blok.background_color === 'gray',
        'bg-black text-white': blok.background_color === 'black',
        'px-site my-18 md:my-22': blok.padding,
        'gap-2 md:gap-8': blok.gap,
      }
    ]"
    :style="{
      '--pt': blok.padding_top  || 0,
      '--pb': blok.padding_bottom  || 0,
      '--pt-md': blok.padding_top_desktop  || 0,
      '--pb-md': blok.padding_bottom_desktop || 0,
      '--mt': blok.margin_top || '4rem',
      '--mb': blok.margin_bottom || '4rem',
      '--mt-md': blok.margin_top_desktop || '5.5rem',
      '--mb-md': blok.margin_bottom_desktop || '5.5rem'
    }"
  >
    <StoryblokComponent
      v-for="component in blok.heading"
      :key="component._uid"
      :blok="component"
    />
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </section>
</template>
