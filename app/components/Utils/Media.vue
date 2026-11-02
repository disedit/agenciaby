<script setup>
const props = defineProps({
  media: { type: Object, required: true },
  width: { type: Number, default: null },
  // Only for above-the-fold media: preloads and loads eagerly. Everything else is lazy.
  preload: { type: Boolean, default: false }
})

const emit = defineEmits(['loaded'])

const isVideo = props.media.filename.endsWith('mp4')
</script>

<template>
  <video
    v-if="isVideo"
    :src="media.filename"
    playsinline
    muted
    autoplay
    loop
    class="block"
    @loadeddata="emit('loaded')" />
  <NuxtImg
    v-else
    :src="media.filename"
    :width="width"
    :alt="media.alt"
    :preload="preload"
    :loading="preload ? 'eager' : 'lazy'"
    class="block"
    @load="emit('loaded')"
  />
</template>
