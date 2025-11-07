<script setup>
defineProps({ blok: Object })

const description = ref(null)
const descriptionFor = ref(null)

const toggleDescription = (desc, uid) => {
  if (descriptionFor.value === uid) {
    description.value = null
    descriptionFor.value = null
    return
  }

  description.value = desc
  descriptionFor.value = uid
}
</script>

<template>
  <article class="border-t border-gray-border grid md:grid-cols-2 gap-6 py-site">
    <div class="flex gap-site">
      <div>
        {{ blok.letter }}
      </div>
      <div>
        <h2 class="mb-6">
          <button
            :class="[
              'cursor-pointer to-underlined',
              {
                'underlined': descriptionFor === blok._uid
              }
            ]"
            @click="toggleDescription(blok.description, blok._uid)"
          >
            {{ blok.title }}
          </button>
        </h2>
        <UtilsRichText
          v-if="description"
          :content="description"
          :class="[
            'font-light text-base',
            { 'hidden md:block': descriptionFor !== blok._uid }
          ]"
        />
      </div>
    </div>
    <div>
      <ul>
        <li v-for="service in blok.services" :key="service._uid">
          <button
            :class="[
              'cursor-pointer to-underlined',
              {
                'underlined': descriptionFor === service._uid
              }
            ]"
            @click="toggleDescription(service.description, service._uid)"
          >
            {{ service.title }}
          </button>
          
          <UtilsRichText
            v-if="description && descriptionFor === service._uid"
            :content="description"
            class="md:hidden"
          />
        </li>
      </ul>
    </div>
  </article>
</template>