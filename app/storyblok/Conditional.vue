<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div :class="{
    'block': blok.mobile,
    'md:block': blok.desktop,
    'hidden': !blok.mobile,
    'md:hidden': !blok.desktop
  }">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
