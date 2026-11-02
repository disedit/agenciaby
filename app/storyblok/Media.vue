<script setup>
defineProps({ blok: Object, forceRatio: Number })
</script>

<template>
  <UtilsMedia
    v-editable="blok"
    :media="blok.media"
    sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
    :class="[
      'media w-full',
      {
        'h-(--vph) object-cover': blok.fit_viewport && !forceRatio,
        'h-auto': !blok.fit_viewport,
        'md:h-(--vph) md:object-cover': blok.fit_viewport_desktop && !forceRatio,
        'md:h-auto': !blok.fit_viewport_desktop,
        'aspect-(--force-ratio) object-cover': !!forceRatio
      }
    ]"
    :style="{
      '--vph': blok.viewport_height || '80svh',
      '--force-ratio': forceRatio
    }"
  />
</template>
