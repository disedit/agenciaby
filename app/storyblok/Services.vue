<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="p-site pb-0 text-bmx">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </section>
</template>