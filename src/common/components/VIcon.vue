<template>
  <svg-filler
    :path="`/static/icons/${name}.svg`"
    class="icon"
  />
</template>

<script>
export default {
  name: 'VIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  display: block;

  fill: currentColor;
}
</style>
