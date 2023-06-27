<template>
  <div class="scroll-wrapper" :style="`--width: ${minWidth}px`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    minWidth: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  overflow: auto;

  width: 100%;

  & > * {
    min-width: var(--width);
  }
}
</style>
