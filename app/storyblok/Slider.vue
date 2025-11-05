<script setup>
import { Carousel, Slide } from 'vue3-carousel'
const props = defineProps({ blok: Object })

const carouselConfig = {
  itemsToShow: 'auto',
  snapAlign: 'start',
  gap: props.blok.gap ? 24 : false
}

const items = computed(() => props.blok.items)
</script>

<template>
  <ClientOnly>
    <Carousel v-bind="carouselConfig" :class="{ '-mx-site': blok.edge }">
      <Slide v-for="slide in items" :key="slide._uid" class="items-start!">
        <StoryblokComponent :key="slide._uid" :blok="slide" />
      </Slide>
    </Carousel>
  </ClientOnly>
</template>
