<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()
const tag = computed(() => {
  return resolveComponent('NuxtLink')
})
</script>

<template>
  <Component
    :is="tag"
    :to="internalLink(blok.link)"
    :class="[
      'carousel__item group flex flex-col gap-3',
    ]"
  >
    <UtilsMedia
      :media="blok.media"
      :class="[
        'object-cover w-[calc(25vw-21px)]',
        {
          'aspect-[0.666]': !blok.heading,
          'aspect-[0.783]': !!blok.heading,
        }
      ]"
    />
    <h3 v-if="blok.heading" class="text-bmx">
      {{ blok.heading }}
    </h3>
    <div v-if="blok.description" class="text-base font-light leading-[1.1] -mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
      {{ blok.description }}
    </div>
  </Component>
</template>
