<template>
  <div class="app-layout">
    <section>
      <div class="container">
        <slot />
      </div>
    </section>

    <portal-target name="popup" />
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
};
</script>
