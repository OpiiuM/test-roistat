<template>
  <div class="row">
    <div
      v-for="(cell, key, index) in data"
      :key="key"
      :class="computedClass(index)"
      :style="{ 'margin-left': index === 0 ? `${gap * level}px` : 0 }"
    >
      {{ cell }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserViewTableRow',

  props: {
    data: {
      type: [Array, Object],
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      gap: 16,
    };
  },

  methods: {
    computedClass(index) {
      return index === 0 ? 'col-auto' : 'col-6';
    },
  },
};
</script>
