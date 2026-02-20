<script setup>
defineProps({
  open: { type: Boolean, required: true },
  scheme: { type: String, required: true },
})

const emit = defineEmits(['close'])

/* Load site settings */
const settings = await useSettings()
const global = settings?.value?.data?.story?.content
const { internalLink } = useLinks()

/* Transitions */
const { $gsap } = useNuxtApp()
let animate

function beforeEnter(el) {
  $gsap.set(el, {
    backdropFilter: 'blur(0px)',
    filter: 'blur(8px)',
    opacity: 0
  })
}

const onEnter = (el) => {
  animate = $gsap.to(el, {
    duration: 0.5,
    backdropFilter: 'blur(8px)',
    filter: 'blur(0px)',
    opacity: 1,
    ease: 'power2.inOut'
  })
}

const onLeave = (el, done) => {
  animate = $gsap.to(el, {
    duration: 0.5,
    backdropFilter: 'blur(0px)',
    filter: 'blur(8px)',
    opacity: 0,
    ease: 'power2.inOut',
    onComplete: done
  })
}

const onEnterCancelled = () => {
  animate && animate.kill()
}

const onLeaveCancelled = () => {
  animate && animate.kill()
}
</script>

<template>
  <Transition
    @before-enter="beforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    @enter-cancelled="onEnterCancelled"
    @leave-cancelled="onLeaveCancelled"
  >
    <div
      v-if="open"
      @click="$emit('close')"
      :class="[
        'fixed inset-0 z-100 backdrop-blur-none',
        'flex flex-col items-end justify-center px-site pt-nav pb-6 text-right text-base',
        {
          'bg-gray-dark/50 text-white focus-dark selection-dark': scheme === 'dark',
          'bg-gray/50 text-black': scheme === 'light',
        }
      ]"
    >
      <ul aria-label="Menú">
        <li
          v-for="(item, i) in global.menu"
          :key="item._uid"
        >
          <NuxtLink
            :to="internalLink(item.link)"
            class="block py-1 md:py-2"
            @click="emit('close')"
          >
            <span v-if="global.menu_include_numbers" class="text-xs md:text-base me-4">
              [ {{  i+1 }} ]
            </span>
            <span class="text-3xl">
              {{ item.label }}
            </span>
          </NuxtLink>
        </li>
      </ul>

      <UtilsRichText :content="global.menu_contact_text" class="mt-8 md:mt-16" />
    </div>
  </Transition>
</template>
