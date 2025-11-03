<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsMedia v-editable="blok" :media="blok.media" />
</template>
