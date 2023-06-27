<template>
  <ul class="app__actions">
    <li class="app__actions-item">
      <v-button
        class="app__button"
        @click.native="OPEN_POPUP('newPerson')"
      >
        Добавить пользователя
      </v-button>
    </li>
    <li class="app__actions-item">
      <v-button
        color="green"
        class="app__button"
        @click.native="RESET_STATE"
      >
        Сбросить сортировку
      </v-button>
    </li>
    <li class="app__actions-item">
      <v-button
        color="orange"
        class="app__button"
        @click.native="saveMockUsers"
      >
        Моковые данные
      </v-button>
    </li>
    <li class="app__actions-item">
      <v-button
        color="red"
        class="app__button"
        @click.native="removeUsers"
      >
        Удалить пользователей
      </v-button>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'ActionsList',

  methods: {
    ...mapMutations(['RESET_STATE']),
    ...mapMutations('Ui', ['OPEN_POPUP']),
    ...mapActions('Users', [
      'saveMockUsers',
      'removeUsers',
    ]),
  },
};
</script>
