<script setup>
defineProps({ blok: Object })
</script>

<template>
  <main class="bg-white min-h-svh pb-1">
    <SiteNav top-message="PROYECTOS" />
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
    <!-- RELATED PORJECTS -->
  </main>
</template>
