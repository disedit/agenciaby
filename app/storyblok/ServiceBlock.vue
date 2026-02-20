<script setup>
defineProps({ blok: Object })

const description = ref(null)
const descriptionFor = ref(null)
const clickable = ref(true)

const showDescription = (desc, uid) => {
  clickable.value = false
  description.value = desc
  descriptionFor.value = uid

  setTimeout(() => {
    clickable.value = true
  }, 500)
}

const hideDescription = (uid) => {
  if (descriptionFor.value === uid) {
    description.value = null
    descriptionFor.value = null
  }
}

const toggleDescription = (desc, uid) => {
  if (!clickable.value) return

  if (descriptionFor.value === uid) {
    hideDescription(uid)
  } else {
    showDescription(desc, uid)
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
              'cursor-pointer to-underlined text-left',
              {
                'underlined': descriptionFor === blok._uid
              }
            ]"
            @click="toggleDescription(blok.description, blok._uid)"
            @mouseenter="showDescription(blok.description, blok._uid)"
            @mouseleave="hideDescription(blok._uid)"
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
    <div>
      <ul class="leading-loose md:leading-relaxed">
        <li v-for="service in blok.services" :key="service._uid">
          <button
            :class="[
              'cursor-pointer to-underlined ms-[50vw] md:ms-0',
              {
                'underlined': descriptionFor === service._uid
              }
            ]"
            @click="toggleDescription(service.description, service._uid)"
            @mouseenter="showDescription(service.description, service._uid)"
            @mouseleave="hideDescription(service._uid)"
          >
            {{ service.title }}
          </button>
          
          <Transition name="fade">
            <div v-if="description && descriptionFor === service._uid">
              <UtilsRichText
                :content="description"
                class="md:hidden md:font-light text-base md:text-base py-4 md:py-0 ps-11 md:ps-0"
              />
            </div>
          </Transition>
        </li>
      </ul>
    </div>
  </article>
</template>