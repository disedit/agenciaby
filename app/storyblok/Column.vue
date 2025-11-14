<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div :class="[
    'column flex flex-col gap-4',
    {
      'md:col-span-2': blok.span === '2'
    }
  ]" v-editable="blok">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>
