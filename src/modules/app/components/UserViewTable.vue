<template>
  <div
    class="table"
    :class="{ 'table--root': isRoot }"
  >
    <div
      v-if="Object.keys(head).length > 0"
      class="table__row table__row--group"
      :class="{ 'table__row--head': isRoot }"
    >
      <div
        v-for="(heading, key) in head"
        :key="heading"
        class="table__cell"
        :class="{ 'table__cell--active': isRoot && sortKey === key }"
      >
        <template v-if="isRoot">
          <button class="table__cell-button" @click="SET_FILTER(key)" />
          <div class="table__cell-wrap">
            <p class="table__cell-name">
              {{ heading }}
            </p>
            <v-icon
              name="angle-down"
              class="table__cell-icon"
            />
          </div>
        </template>
        <span v-else>
          {{ heading }}
        </span>
      </div>
    </div>
    <div
      v-if="body.length > 0"
      class="table__row"
      :class="{ 'table__row--main': isRoot }"
    >
      <user-view-table
        v-for="node in body"
        :key="node.id"
        :head="{
          name: node.name,
          phone: node.phone,
        }"
        :body="node.employees"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'UserViewTable',

  props: {
    head: {
      type: Object,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
    isRoot: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState(['sortKey']),
  },

  methods: {
    ...mapMutations(['SET_FILTER']),
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;

  width: 100%;

  &--root {
    position: relative;
  }

  .table {
    &::before {
      position: absolute;
      right: 0;

      width: 50%;
      height: rem(1px);

      content: "";

      background-color: $white;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;

    &--head {
      border-top: rem(1px) solid $white;
      border-right: rem(1px) solid $white;
    }

    &--group {
      border-top: rem(1px) solid $white;
      border-bottom: rem(1px) solid $white;
      border-left: rem(1px) solid $white;
    }

    &--main {
      border-right: rem(1px) solid $white;
    }
  }

  &__row--head & {
    &__cell {
      position: relative;

      transition: color $transition-duration $transition-function,
                  background-color $transition-duration $transition-function;

      &:hover,
      &--active {
        color: $light-blue;
        background-color: rgba($blue, .25);
      }
    }
  }

  &__row &__row &__row {
    padding: 0 rem($gap-small);
  }

  &__cell {
    flex: 1;

    padding: rem($gap-small) 0 rem($gap-small) rem($gap-small);

    word-break: break-all;

    @media #{$screen-tablet} {
      padding: rem($gap-small) 0 rem($gap-small) rem($gap-medium);
    }

    &:first-child {
      border-right: rem(1px) solid $white;
    }

    &-wrap {
      display: flex;
      align-items: center;
    }

    &-button {
      @include position-stretching();

      cursor: pointer;

      opacity: 0;
    }

    &-name {
      margin-right: rem($gap-micro);
    }

    &-icon {
      flex-shrink: 0;
    }
  }
}
</style>
