<script setup>
defineProps({ blok: Object })
</script>

<template>
  <ul v-editable="blok" class="grid grid-cols-4 gap-5 px-site py-4">
    <li v-for="project in blok.projects" :key="project._uid">
      <StoryblokComponent
        :blok="project"
      />
    </li>
  </ul>
</template>
