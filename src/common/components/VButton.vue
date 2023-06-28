<template>
  <button
    class="button"
    :class="computedClass"
  >
    <span
      v-if="$slots.prefix"
      class="button__preffix"
    >
      <slot name="prefix" />
    </span>
    <span class="button__text">
      <slot />
    </span>
    <span
      v-if="$slots.suffix"
      class="button__suffix"
    >
      <slot name="suffix" />
    </span>
  </button>
</template>

<script>
const COLORS = ['blue', 'green', 'orange', 'red'];

export default {
  name: 'VButton',

  props: {
    color: {
      type: String,
      default: 'blue',
      validator: (val) => COLORS.includes(val),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedClass() {
      return {
        [`button--${this.color}`]: this.color,
        'button--active': this.isActive,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: rem(120px);
  padding: rem(10px) rem(12px);

  user-select: none;
  cursor: pointer;
  transition: background-color $transition-duration $transition-function;
  text-decoration: none;
  white-space: nowrap;

  color: $white;
  border: rem(1px) solid $mine-shaft;
  border-radius: rem($border-radius);

  &[disabled] {
    cursor: not-allowed;

    background-color: $dove-gray;

    &:hover {
      background-color: $dove-gray;
    }
  }

  &--blue {
    background-color: $dodger-blue;
  }

  &--blue:hover,
  &--blue#{&}--active {
    background-color: darken($dodger-blue, 10%);
  }

  &--orange {
    background-color: $orange;
  }

  &--orange:hover,
  &--orange#{&}--active {
    background-color: darken($orange, 10%);
  }

  &--green {
    background-color: $green;
  }

  &--green:hover,
  &--green#{&}--active {
    background-color: darken($green, 10%);
  }

  &--red {
    background-color: $red;
  }

  &--red:hover,
  &--red#{&}--active {
    background-color: darken($red, 10%);
  }

  &__prefix {
    flex-shrink: 0;

    margin-right: rem($gap-micro);
  }

  &__text {
    @include text-size(16px, 20px, $font-weight-average);
  }

  &__suffix {
    flex-shrink: 0;

    margin-left: rem($gap-micro);
  }
}
</style>
