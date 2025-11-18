<script setup>
const props = defineProps({ blok: Object })

const items = computed(() => {
  return props.blok.items.split('\n')
})

const { internalLink } = useLinks()
</script>

<template>
  <ClientOnly>
    <NuxtLink :to="internalLink(blok.link)">
      <Vue3Marquee v-editable="blok" clone :duration="blok.duration ? parseInt(blok.duration) : 20" class="text-sm md:text-basemd overflow-clip">
        <div v-for="text in items" class="whitespace-pre-wrap me-32">
          {{ text }}
        </div>
      </Vue3Marquee>
    </NuxtLink>
  </ClientOnly>
</template>
