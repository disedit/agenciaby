<script setup>
const props = defineProps({ blok: Object, gap: Boolean, edge: Boolean })
</script>

<template>
  <UtilsCard v-editable="blok" :card="blok" :gap="gap" :edge="edge" />
</template>
