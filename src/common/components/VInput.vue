<template>
  <div
    class="field"
    :class="computedClass"
  >
    <span
      v-if="label"
      class="field__label"
    >
      {{ label }}
    </span>
    <div class="field__control">
      <component
        :is="tag"
        v-bind="$attrs"
        :value="value"
        v-mask="mask"
        ref="field"
        class="field__input"
        @input="$emit('input', $event.target.value)"
      />
      <span
        v-if="$slots.suffix"
        class="field__suffix"
        @click="handleClick"
      >
        <slot name="suffix" />
      </span>
    </div>
    <div
      v-if="isError && errorText"
      class="field__error"
    >
      {{ errorText }}
    </div>
  </div>
</template>

<script>
import fieldMixin from '@/common/mixins/fieldMixin';

export default {
  name: 'VInput',

  mixins: [fieldMixin],

  props: {
    tag: {
      type: String,
      default: 'input',
    },
    mask: {
      type: String,
      default: '',
    },
  },

  computed: {
    computedClass() {
      return {
        'field--textarea': this.tag === 'textarea',
        'field--has-error': this.isError,
        'field--required': this.required,
        'field--has-suffix': !!this.$slots.suffix,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  &--has-error & {
    &__error {
      display: block;
    }
  }

  &--textarea & {
    &__input {
      min-height: rem(140px);

      resize: none;
    }
  }

  &--required & {
    &__label {
      &::after {
        content: ' *';
      }
    }
  }

  &--has-suffix & {
    &__input {
      padding-right: rem(36px);
    }
  }

  &__label {
    display: block;

    margin-bottom: rem($gap-mini);

    color: $white;
  }

  &__control {
    position: relative;
  }

  &__input {
    width: 100%;
    height: rem($height-field);
    padding: rem($gap-mini) rem(10px);

    transition: border-color $transition-duration $transition-function;

    color: $white;
    border: rem(1px) solid $mine-shaft-2;
    border-radius: rem($border-radius-micro);
    background-color: $mine-shaft-4;

    &:focus {
      border-color: $white;
      outline: none;
    }
  }

  &__suffix {
    position: absolute;
    top: 0;
    right: 0;

    padding: rem(10px) rem(8px);

    cursor: pointer;
    transition: color $transition-duration $transition-function;

    color: #999;

    &:hover {
      color: $white;
    }
  }

  &__error {
    @include text-size(14px, 16px);

    display: none;

    margin-top: rem($gap-mini);

    color: red;
  }
}
</style>
