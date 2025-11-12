<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <UtilsCard v-editable="blok" :card="blok" />
</template>
