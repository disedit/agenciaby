<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      {
        'bg-white': blok.background_color === 'white',
        'bg-gray': blok.background_color === 'gray',
        'bg-black text-white': blok.background_color === 'black',
        'px-site py-22': blok.padding
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
