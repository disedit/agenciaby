<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsMedia
    v-editable="blok"
    :media="blok.media"
    :class="[
      'w-full',
      {
        'h-[90svh] object-cover': blok.fit_viewport,
      }
    ]"
  />
</template>
