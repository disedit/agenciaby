<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsMedia
    v-editable="blok"
    :media="blok.media"
    :class="[
      'media w-full',
      {
        'h-[90svh] object-cover': blok.fit_viewport,
        'h-auto': !blok.fit_viewport,
        'md:h-[90svh] md:object-cover': blok.fit_viewport_desktop,
        'md:h-auto': !blok.fit_viewport_desktop,
      }
    ]"
  />
</template>
