<script lang="ts" setup>
defineProps<{
  topMessage?: string
}>()

const route = useRoute()
const scheme = computed(() => route.path === '/' ? 'dark' : 'light')

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header
    :class="[
      'absolute top-0 left-0 right-0 px-site py-6 text-base z-500',
      'flex justify-between items-center',
      {
        'text-white': scheme === 'dark',
        'text-black': scheme === 'light',
      }
    ]">
    <NuxtLink to="/" class="to-underlined">
      BÝ
    </NuxtLink>
    <div>
      {{ topMessage }}
    </div>
    <button
      @click="toggleMenu"
      class="cursor-pointer p-4 -m-4 bg-red to-underlined"
    >
      MENÚ
    </button>
  </header>
  <SiteMenu :scheme="scheme" :open="menuOpen" @close="menuOpen = false" />
</template>
