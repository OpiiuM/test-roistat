<template>
  <div
    class="select"
    :class="computedClass"
  >
    <span
      v-if="label"
      class="select__label"
    >
      {{ label }}
    </span>
    <div class="select__control">
      <select
        v-bind="$attrs"
        class="select__field"
        @input="$emit('input', $event.target.value)"
      >
        <option
          v-if="placeholder"
          value=""
          disabled
        >
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
    <div class="select__error">
      {{ errorText }}
    </div>
  </div>
</template>

<script>
import fieldMixin from '@/common/mixins/fieldMixin';

export default {
  name: 'VSelect',

  mixins: [fieldMixin],

  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  computed: {
    computedClass() {
      return {
        'select--has-error': this.isError,
        'select--required': this.required,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  &--has-error & {
    &__error {
      display: block;
    }
  }

  &--required & {
    &__label {
      &::after {
        content: ' *';
      }
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

  &__field {
    width: 100%;
    height: rem($height-field);
  }

  &__error {
    @include text-size(14px, 16px);

    display: none;

    margin-top: rem($gap-mini);

    color: red;
  }
}
</style>
