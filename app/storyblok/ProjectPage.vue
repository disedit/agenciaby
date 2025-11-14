<script setup>
defineProps({ blok: Object })

const settings = await useSettings()
const global = settings?.value?.data?.story?.content
</script>

<template>
  <main class="bg-white min-h-svh pb-1">
    <SiteNav top-message="PROYECTOS" top-link="/proyectos" />
    <StoryblokComponent
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
    />
    <StoryblokComponent
      v-for="component in global.projects_footer"
      :key="component._uid"
      :blok="component"
    />
  </main>
</template>
