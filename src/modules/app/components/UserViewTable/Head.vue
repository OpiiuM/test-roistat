<template>
  <div class="row row--no-wrap">
    <v-button
      v-for="(item, key) in data"
      :key="key"
      class="col-6"
      :is-active="key === sortKey"
      @click.native="$emit('sort', key)"
    >
      {{ item }}
      <template #suffix>
        <v-icon name="angle-down" />
      </template>
    </v-button>
  </div>
</template>

<script>
export default {
  name: 'UserViewTableHead',

  props: {
    data: {
      type: Object,
      required: true,
    },
    sortKey: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
[class*="col-"] {
  border: rem(1px) solid $blue;
  border-radius: 0;
  background-color: rgba($blue, .25)
}
</style>
