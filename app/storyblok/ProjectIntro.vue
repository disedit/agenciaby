<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="grid md:grid-cols-2 px-site my-14 md:my-28 gap-10 md:gap-site"
  >
    <h2 class="text-basemd md:text-xl max-w-[30ch] font-medium md:font-normal text-balance leading-tight md:leading-none">
      {{ blok.heading }}
    </h2>
    <UtilsRichText :content="blok.text" class="text-base font-light max-w-[60ch] text-pretty leading-tight" />
  </section>
</template>
