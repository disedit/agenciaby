<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="empty-space"
  />
</template>
