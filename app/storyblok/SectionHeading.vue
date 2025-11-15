<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()
const hTag = computed(() => `h${props.blok.h_level}`)
const linkTag = computed(() => props.blok.link ? resolveComponent('NuxtLink') : 'div')
</script>

<template>
  <Component
    v-editable="blok"
    :is="hTag"
    class="text-sm md:text-md font-light mb-4 mt-8"
  >
    <Component
      :is="linkTag"
      :to="linkTag !== 'div' ? internalLink(blok.link) : null"
      :class="{ 'span-to-underlined': linkTag !== 'div' }"
    >
      <span>{{ blok.heading }}</span> -&gt;
    </Component>
  </Component>
</template>
