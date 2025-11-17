<script lang="ts" setup>
const props = defineProps<{
  topMessage?: string,
  topLink?: string
}>()

const route = useRoute()
const scheme = computed(() => route.path === '/' ? 'dark' : 'light')
const fixed = computed(() => route.path === '/proyectos' || route.path === '/proyectos/')

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const topTag = computed(() => props.topLink ? resolveComponent('NuxtLink') : 'div')
</script>

<template>
  <header
    :class="[
      'absolute top-0 left-0 right-0 px-site py-5 md:py-6 text-xxs md:text-base z-500',
      'flex justify-between items-center',
      {
        'text-white': scheme === 'dark',
        'text-black': scheme === 'light',
        'absolute': !fixed,
        'fixed': fixed
      }
    ]">
    <NuxtLink to="/" class="to-underlined">
      BÝ
    </NuxtLink>
    <Component :is="topTag" :to="topLink" class="absolute left-[50%] -translate-x-[50%] md:translate-x-0 md:static">
      {{ topMessage }}
    </Component>
    <button
      @click="toggleMenu"
      class="cursor-pointer p-4 -m-4 bg-red to-underlined"
    >
      MENÚ
    </button>
  </header>
  <SiteMenu :scheme="scheme" :open="menuOpen" @close="menuOpen = false" />
  <div class="h-nav" />
</template>
