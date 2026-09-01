<script setup>
const props = defineProps({ blok: Object })

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
      sort_by: props.blok.sort_by || 'position:asc,sort_by_date:desc,first_published_at:desc',
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
    <div :class="['slider -mx-site', { 'px-site': !blok.edge }]" :style="{ '--gap': blok.gap ? '20px' : '0' }">
      <div class="slider__track">
        <div v-for="slide in items" :key="slide._uid" class="slider__item">
          <StoryblokComponent :key="slide._uid" :blok="slide" :edge="blok.edge" :gap="blok.gap" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.slider__track {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  scroll-padding-inline: calc(var(--edges, 0) / 2);
}

.slider__item {
  display: none;
}

.slider__item:nth-child(-n+4) {
  display: block;
}

.slider__item > * {
  height: 100%;
}

@media (min-width: 750px) {
  .slider.px-site {
    --edges: calc(var(--spacing-site) * 2);
  }

  .slider {
    box-sizing: border-box;
    padding-inline: calc(var(--edges, 0) / 2);
  }

  .slider__track {
    display: flex;
    gap: var(--gap);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    padding: 1rem 0;
    /* ensure snaps align with the visible area when there's a scrollbar */
    scroll-padding-inline: calc(var(--edges, 0) / 2);
    scrollbar-width: thin;
  }

  .slider__item {
    display: block;
    flex: 0 0 calc((100% - (var(--gap) * 3)) / 4);
    box-sizing: border-box;
    scroll-snap-align: start;
  }

  .slider__track::-webkit-scrollbar {
    height: 8px;
  }
}
</style>