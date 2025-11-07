<script setup>
defineProps({ blok: Object })
</script>

<template>
  <main class="bg-gray min-h-svh pb-1">
    <SiteNav :top-message="blok.top_message || blok.title" />
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
  </main>
</template>
