<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsMedia
    v-editable="blok"
    :media="blok.media"
    sizes="1000px"
    :class="[
      'w-full',
      {
        'h-[80svh] object-cover': blok.fit_viewport,
      }
    ]"
  />
</template>
