<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    :class="[
      'empty-space',
      {
        'block': blok.mobile,
        'md:block': blok.desktop,
        'hidden': !blok.mobile,
        'md:hidden': !blok.desktop
      }
    ]"
  />
</template>
