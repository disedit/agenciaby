<script setup>
defineProps({
  content: Object,
})
</script>

<template>
  <div class="prose">
    <StoryblokRichText :doc="content" />
  </div>
</template>