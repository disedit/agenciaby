<script setup>
const props = defineProps({ card: Object, gap: Boolean, edge: Boolean })
const { internalLink } = useLinks()
const tag = computed(() => props.card.link ? resolveComponent('NuxtLink') : 'article')
</script>

<template>
  <Component
    :is="tag"
    :to="tag !== 'article' ? internalLink(card.link) : null"
    class="carousel__item group flex flex-col md:gap-3"
  >
    <UtilsMedia
      v-if="card.media?.filename"
      :media="card.media"
      :class="[
        'object-cover w-full',
        {
          'aspect-[0.666]': !card.heading,
          'aspect-[0.783]': !!card.heading,
          'md:w-[calc(25vw-18px)]': gap && edge,
          'md:w-25vw': !gap && edge,
          'md:w-[calc(25vw-42px)]': gap && !edge,
          'md:w-[calc(25vw-(var(--spacing-site)*2))]': !gap && !edge
        }
      ]"
    />
    <h3
      v-if="card.heading"
      class="text-sm md:text-basemd leading-[1.1] my-1 md:my-0"
    >
      {{ card.heading }}
    </h3>
    <div
      v-if="card.heading"
      class="hidden md:block text-base font-light leading-[1.1] -mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition line-clamp-3 h-[3.2em]"
    >
      <span class="text-[0.9em]">{{ card.description }}</span>
    </div>
  </Component>
</template>
