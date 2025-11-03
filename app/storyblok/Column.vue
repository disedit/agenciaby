<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="column flex flex-col gap-4" v-editable="block">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
