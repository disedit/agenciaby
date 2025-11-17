<script setup>
const props = defineProps({ blok: Object })

const { internalLink } = useLinks()
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
    <template v-for="project in blok.projects" :key="project._uid">
    <li v-if="project.component === 'ProjectItem'" v-editable="project" class="overflow-clip" style="clip-path: inset(0);">
      <NuxtLink :to="internalLink(project.link)" :class="['grid min-h-dvh', {'text-white': project.text_color === 'white', 'text-black': project.text_color === 'black'}]">
        <div class="fixed inset-0 z-20 grid grid-rows-2 w-[50vw] p-site ps-0 ms-auto items-end">
          <h2 class="text-md leading-none">{{ project.heading }}</h2>
          <div class="text-sm">
            {{ project.list || project.description }}
          </div>
        </div>
        <UtilsMedia
          :media="project.media"
          class="fixed inset-0 h-full"
        />
      </NuxtLink>
    </li>
    </template>
  </ul>
</template>
