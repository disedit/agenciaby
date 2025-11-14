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
        'px-site my-22': blok.padding,
        'gap-8': blok.gap,
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
