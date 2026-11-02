<script setup>
const props = defineProps({ blok: Object })

const { internalLink } = useLinks()

const listOrDescriptionHtml = (project) => {
  if (project.list) {
    const list = project.list.split('\n').map(item => item.trim()).filter(item => item.length > 0)
    return `<ul>${list.map(item => `<li>${item}</li>`).join('')}</ul>`
  } else {
    return project.description || ''
  }
}

// Mobile list: every project is a fixed, full-screen layer revealed through its
// clip-path. Fixed layers are never culled, so rendering all of them at once
// runs iOS out of memory. Only mount the projects near the viewport.
const mobileProjects = computed(() => (props.blok.projects || []).filter(p => p.component === 'ProjectItem'))
const nearby = ref(new Set(mobileProjects.value.slice(0, 2).map(p => p._uid)))
const mobileItems = ref([])
let observer

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const next = new Set(nearby.value)
    for (const entry of entries) {
      const uid = entry.target.dataset.uid
      if (entry.isIntersecting) next.add(uid)
      else next.delete(uid)
    }
    nearby.value = next
  }, { rootMargin: '100% 0px' })
  mobileItems.value.forEach(el => observer.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <ul v-editable="blok" class="hidden md:grid grid-cols-4 gap-5 px-site py-4">
    <li v-for="project in blok.projects" :key="project._uid">
      <StoryblokComponent
        :blok="project"
      />
    </li>
  </ul>
  <ul v-editable="blok" class="grid md:hidden -mt-nav">
    <li
      v-for="(project, index) in mobileProjects"
      :key="project._uid"
      ref="mobileItems"
      v-editable="project"
      :data-uid="project._uid"
      class="overflow-clip"
      style="clip-path: inset(0);"
    >
      <NuxtLink :to="internalLink(project.link)" :class="['grid min-h-dvh', {'text-white': project.text_color === 'white', 'text-black': project.text_color === 'black'}]">
        <template v-if="nearby.has(project._uid)">
          <div class="fixed inset-0 z-20 grid grid-rows-2 w-[50vw] p-site ps-0 ms-auto items-end">
            <h2 class="text-md leading-none">{{ project.heading }}</h2>
            <div class="text-sm" v-html="listOrDescriptionHtml(project)" />
          </div>
          <UtilsMedia
            :media="project.media"
            :preload="index === 0"
            loading="eager"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
            class="fixed inset-0 h-full w-full"
          />
        </template>
      </NuxtLink>
    </li>
  </ul>
</template>
