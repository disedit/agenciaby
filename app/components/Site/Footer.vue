<template>
  <footer class="px-site py-5 md:py-6 text-xs md:text-md">
    <div class="grid gap-10 md:gap-site grid-cols-2 md:grid-cols-[14rem_1fr_auto] leading-relaxed">
      <div class="text-md col-span-2 md:col-span-1">
        {{ global.footer_brand }}
      </div>
      <div class="col-span-2 md:col-span-1">
        <UtilsRichText :content="global.contact" class="links-underlined" />
      </div>
      <div class="col-span-2 md:col-span-1 md:text-right links-to-underlined">
        <ul>
          <li v-for="(item, i) in global.links" :key="item._uid">
            <NuxtLink :to="internalLink(item.link)">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="hidden md:block">

      </div>
      <div>
        <ul class="flex gap-2 md:text-base links-to-underlined">
          <li v-for="(item, i) in global.bottom_links" :key="item._uid">
            <NuxtLink :to="internalLink(item.link)">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="md:text-base text-right">
        {{ withYear(global.copyright) }}
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
/* Load site settings */
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink } = useLinks()

const withYear = (text: string) => {
  const year = new Date().getFullYear()
  return text.replace('{currentYear}', year.toString())
}
</script>

<style>

</style>