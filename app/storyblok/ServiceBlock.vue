<script setup>
import { breakpointsTailwind } from '@vueuse/core'

defineProps({ blok: Object })

const breakpoints = useBreakpoints(breakpointsTailwind)

const description = ref(null)
const descriptionFor = ref(null)

const showDescription = (desc, uid) => {
  description.value = desc
  descriptionFor.value = uid
}

const hideDescription = (uid) => {
  if (descriptionFor.value === uid) {
    description.value = null
    descriptionFor.value = null
  }
}

const toggleDescription = (desc, uid) => {
  if (descriptionFor.value === uid) {
    hideDescription(uid)
  } else {
    showDescription(desc, uid)
  }
}

function hoverShowDescription(desc, uid) {
  if (breakpoints.greaterOrEqual('md').value) {
    showDescription(desc, uid)
  }
}

function hoverHideDescription(uid) {
  if (breakpoints.greaterOrEqual('md').value) {
    hideDescription(uid)
  }
}
</script>

<template>
  <article v-editable="blok" class="border-t border-gray-border grid md:grid-cols-2 gap-3 md:gap-6 py-12">
    <div class="flex gap-site">
      <div class="shrink-0">
        {{ blok.letter }}
      </div>
      <div>
        <h2 class="md:mb-6 max-w-[30vw] md:max-w-auto">
          <button
            :class="[
              'cursor-pointer to-underlined text-left leading-[1.2] relative z-10 text-balance',
              {
                'underlined': descriptionFor === blok._uid
              }
            ]"
            @click="toggleDescription(blok.description, blok._uid)"
            @mouseenter="hoverShowDescription(blok.description, blok._uid)"
            @mouseleave="hoverHideDescription(blok._uid)"
          >
            {{ blok.title }}
          </button>
        </h2>
        <Transition name="fade" mode="out-in">
          <div :key="descriptionFor">
            <UtilsRichText
              v-if="description"
              :content="description"
              :class="[
                'font-light text-base md:text-smbase pt-2 md:pt-0',
                { 'hidden md:block': descriptionFor !== blok._uid }
              ]"
            />
          </div>
        </Transition>
      </div>
    </div>
    <div :class="['transition-all duration-300 ease-in-out', { '-mt-13 md:mt-0': descriptionFor !== blok._uid && blok.letter !== '[ C ]', '-mt-9 md:mt-0': descriptionFor === blok._uid || blok.letter === '[ C ]' }]">
      <ul class="flex flex-col gap-3">
        <li v-for="(service, i) in blok.services" :key="service._uid">
          <button
            :class="[
              'cursor-pointer to-underlined ms-[50vw] md:ms-0 text-left leading-[1.1] text-balance',
              {
                'underlined': descriptionFor === service._uid
              }
            ]"
            @click="toggleDescription(service.description, service._uid)"
            @mouseenter="hoverShowDescription(service.description, service._uid)"
            @mouseleave="hoverHideDescription(service._uid)"
          >
            {{ service.title }}
          </button>
          
          <Transition name="fade">
            <div v-if="description && descriptionFor === service._uid">
              <UtilsRichText
                :content="description"
                :class="['md:hidden md:font-light text-base md:text-base pb-4 md:py-0 ps-12 md:ps-0', { 'pt-8': i === 0, 'pt-3': i !== 0 }]"
              />
            </div>
          </Transition>
        </li>
      </ul>
    </div>
  </article>
</template>