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
        'h-(--vph) object-cover': blok.fit_viewport,
        'h-auto': !blok.fit_viewport,
        'md:h-(--vph) md:object-cover': blok.fit_viewport_desktop,
        'md:h-auto': !blok.fit_viewport_desktop,
      }
    ]"
    :style="{
      '--vph': blok.viewport_height || '90svh'
    }"
  />
</template>
