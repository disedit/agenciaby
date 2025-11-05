<script setup>
const props = defineProps({ blok: Object })
const { internalLink } = useLinks()
const hTag = computed(() => `h${props.blok.h_level}`)
const linkTag = computed(() => resolveComponent('NuxtLink'))
</script>

<template>
  <Component
    v-editable="blok"
    :is="hTag"
    class="text-md font-light mb-4 mt-8"
  >
    <Component
      :is="linkTag"
      :to="internalLink(blok.link)"
      class="span-to-underlined"
    >
      <span>{{ blok.heading }}</span> -&gt;
    </Component>
  </Component>
</template>
