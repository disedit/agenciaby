<template>
  <div ref="curtainRef" class="fixed z-1000 overflow-clip inset-0">
    <div class="bg-beige min-h-dvh flex gap-4 justify-center items-center">
      <div class="text-base">
        AGENCIA BÝ
      </div>
      <div class="w-16 bg-[#A9ACAA]">
        <div ref="loadingBarRef" class="loading-bar" />
      </div>
      <div class="text-sm w-10">
        <span ref="percentageRef">0</span>%
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const loadingBarRef = ref(null)
const percentageRef = ref(null)
const curtainRef = ref(null)

onMounted(() => {
  const tl = $gsap.timeline()
  
  tl.to(loadingBarRef.value, {
    width: '100%',
    duration: 1,
    ease: 'power2.in'
  })
  
  tl.to(percentageRef.value, {
    innerText: 100,
    duration: 1,
    ease: 'power2.in',
    snap: { innerText: 1 }
  }, 0)

  tl.to(curtainRef.value, {
    height: '0',
    duration: 1,
    ease: 'power4.inOut',
    onComplete: () => {
      // Set meta theme-color
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#FFFFFF')
      }
    }
  })
})
</script>

<style scoped>
.loading-bar {
  width: 0%;
  height: 1px;
  background-color: var(--color-black);
}
</style>