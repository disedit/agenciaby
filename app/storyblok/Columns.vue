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
        'px-site my-18 md:my-22': blok.padding,
        'bg-white': blok.background_color === 'white',
        'bg-gray': blok.background_color === 'gray',
        'bg-black text-white': blok.background_color === 'black',
      }
    ]"
    :style="{
      '--pt': blok.padding_top,
      '--pb': blok.padding_bottom,
      '--pt-md': blok.padding_top_desktop,
      '--pb-md': blok.padding_bottom_desktop
    }"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </section>
</template>
