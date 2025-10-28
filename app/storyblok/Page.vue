<script setup>
defineProps({ blok: Object })
</script>

<template>
  <main>
    <SiteNav :top-message="blok.top_message || blok.title" />
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
  </main>
</template>
