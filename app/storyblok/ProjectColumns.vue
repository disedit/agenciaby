<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      'project-columns flex gap-6 px-site my-22',
      { 'fixed-height': blok.fixed_height }
    ]"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </section>
</template>

<style>
.project-columns {
  .media {
    flex-basis: 40%;
    min-width: 0;
  }

  .empty-space {
    flex-basis: 20%;
    min-width: 0;
  }

  .prose {
    flex-basis: 60%;
  }

  &.fixed-height .media {
    aspect-ratio: .8;
  }
}
</style>