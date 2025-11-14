<script setup>
import { Carousel, Slide } from 'vue3-carousel'
const props = defineProps({ blok: Object })

const carouselConfig = {
  itemsToShow: 'auto',
  snapAlign: 'start',
  gap: props.blok.gap ? 24 : false
}

const route = useRoute()
const version = useEnvironment()
const storyblokApi = useStoryblokApi()
const { data: projects } = await useAsyncData(
  'projects_' + props.blok._uid + '_' + route.path,
  async () => {
    if (!props.blok.prepopulate_with) {
      return []
    }

    return await storyblokApi.get(`cdn/stories`, {
      version,
      excluding_fields: 'body',
      starts_with: `proyectos/`,
      sort_by: 'sort_by_date:desc,content.name:asc',
      is_startpage: false,
      excluding_slugs: route.path.replace(/^\//, ''),
      per_page: 8
    })
  }
)

const items = computed(() => {
  if (props.blok.prepopulate_with) {
    return projects.value.data.stories.map(item => ({
      '_uid': item.uuid,
      component: 'SliderItem',
      heading: item.content.title,
      description: item.content.description,
      media: item.content.thumbnail,
      link: item.full_slug
    }))
  }

  return props.blok.items
})
</script>

<template>
  <ClientOnly>
    <Carousel v-bind="carouselConfig" :class="{ '-mx-site': blok.edge }">
      <Slide v-for="slide in items" :key="slide._uid" class="items-start!">
        <StoryblokComponent :key="slide._uid" :blok="slide" />
      </Slide>
    </Carousel>
  </ClientOnly>
</template>
