<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="grid md:grid-cols-2 px-site my-28 gap-site"
  >
    <h2 class="text-basemd md:text-xl max-w-[30ch] font-medium md:font-normal text-balance leading-tight md:leading-none mb-6 md:mb-0">
      {{ blok.heading }}
    </h2>
    <UtilsRichText :content="blok.text" class="text-base font-light max-w-[60ch] text-pretty leading-tight" />
  </section>
</template>
