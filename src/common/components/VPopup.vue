<template>
  <portal to="popup">
    <transition name="fade" appear>
      <div
        class="overlay"
        @click.self="$emit('close')"
      >
        <div class="popup">
          <v-icon
            name="cross"
            class="popup__close"
            @click.native="$emit('close')"
          />

          <div class="popup__content">
            <div class="popup__container">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
export default {
  name: 'VPopup',
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-duration ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.overlay {
  @include position-stretching(fixed, $z-index-popup);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity $transition-duration ease-in-out;

  background-color: rgba($black, 0.55);
  backdrop-filter: blur($gap-micro);
}

.popup {
  position: relative;

  width: 100%;
  max-width: rem(700px);

  color: $white;
  border-radius: rem($border-radius-micro);
  background-color: $mine-shaft;

  &__close {
    position: absolute;
    top: rem(-$gap);
    right: 0;

    cursor: pointer;
    transition: color $transition-duration $transition-function;

    color: $white;

    &:hover {
      color: darken($white, 25%);
    }
  }

  &__content {
    max-height: 90vh;
    padding: rem($gap-medium);
  }
}
</style>
