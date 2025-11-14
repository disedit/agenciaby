<script setup>
const props = defineProps({ blok: Object })

const hasProse = computed(() => props.blok.blocks.filter(block => block.component === 'Text').length > 0)
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      'project-columns flex gap-6 px-site my-22',
      {
        'fixed-height': blok.fixed_height,
        'has-prose': hasProse
      }
    ]"
  >
    <div v-for="block in blok.blocks" :key="block._uid" :class="`flex block-${block.component}`">
      <StoryblokComponent :blok="block" />
    </div>
  </section>
</template>

<style>
.project-columns {
  .block-Media {
    flex-basis: 40%;
    min-width: 0;
    flex-shrink: 0;
  }

  .block-EmptySpace {
    flex-basis: 20%;
    min-width: 0;
  }

  .block-Text {
    flex-basis: 60%;
    flex-shrink: 0;
    min-width: 0;
  }

  &.has-prose {
    .block-EmptySpace {
      flex-basis: 10%;
    }

    .block-Text {
      flex-basis: 50%;
    }
  }

  &.fixed-height .block-Media img {
    aspect-ratio: .8;
  }
}
</style>