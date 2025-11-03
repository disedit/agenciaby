<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      'grid',
      {
        'grid-cols-1': blok.columns === '1',
        'grid-cols-2': blok.columns === '2',
        'grid-cols-3': blok.columns === '3',
        'gap-6': blok.gap,
        'px-site py-22': blok.padding,
        'bg-white': blok.background_color === 'white',
        'bg-gray': blok.background_color === 'gray',
        'bg-black text-white': blok.background_color === 'black',
      }
    ]"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </section>
</template>
