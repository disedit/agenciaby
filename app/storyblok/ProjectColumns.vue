<script setup>
const props = defineProps({ blok: Object })

const hasProse = computed(() => props.blok.blocks.filter(block => block.component === 'Text').length > 0)
</script>

<template>
  <section
    v-editable="blok"
    :class="[
      'project-columns flex flex-wrap md:flex-nowrap gap-1 md:gap-6 md:px-site my-1 md:my-22',
      {
        'fixed-height': blok.fixed_height,
        'has-prose': hasProse
      }
    ]"
  >
    <div
      v-for="block in blok.blocks"
      :key="block._uid"
      :class="[`block-${block.component}`, {
        'flex': (block.hasOwnProperty('mobile') && block.mobile) || !block.hasOwnProperty('mobile'),
        'md:flex': block.hasOwnProperty('desktop') && block.desktop,
        'hidden': block.hasOwnProperty('mobile') && !block.mobile,
        'md:hidden': block.hasOwnProperty('desktop') && !block.desktop
      }]"
    >
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

  & > div:nth-child(4) {
    display: none;
  }
}

@media (max-width: 46rem) {
  .project-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(4) {
      display: flex;
    }
  }

  .project-columns.has-prose {
    grid-template-columns: 1fr;

    &.fixed-height .block-Media img {
      aspect-ratio: unset;
    }

    .block-Media {
      grid-row: 1;
    }

    .block-Text {
      padding-inline: var(--spacing-site);
      padding-block: 1.5rem;
      grid-row: 2;
    }

    .block-EmptySpace {
      display: none !important;
    }
  }
}
</style>