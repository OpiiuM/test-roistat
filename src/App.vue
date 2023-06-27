<template>
  <div id="app" class="app">
    <app-layout class="app__layout">
      <h1 class="app__title">Тестовое задание "Roistat"</h1>

      <div class="app__content">
        <actions-list />

        <v-scroll :min-width="550">
          <user-view-table
            :head="head"
            :body="sortedUsers"
            is-root
            class="app__data"
          />
        </v-scroll>
      </div>

      <v-popup
        v-if="popup.newPerson"
        @close="CLOSE_POPUP('newPerson')"
      >
        <add-user-form
          @submit="CLOSE_POPUP('newPerson')"
        />
      </v-popup>
    </app-layout>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import AppLayout from '@/layouts/AppLayout';
import UserViewTable from '@/modules/app/components/UserViewTable';
import AddUserForm from '@/modules/app/components/AddUserForm';
import ActionsList from '@/modules/app/components/ActionsList';

export default {
  name: 'App',

  components: {
    AppLayout,
    UserViewTable,
    AddUserForm,
    ActionsList,
  },

  data() {
    return {
      head: {
        name: 'Имя',
        phone: 'Телефон',
      },
    };
  },

  computed: {
    ...mapState('Ui', ['popup']),
    ...mapGetters('Users', ['sortedUsers']),
  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    ...mapMutations('Ui', ['CLOSE_POPUP']),
    ...mapActions('Users', ['fetchUsers']),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.app {
  width: 100%;
  min-height: 100vh;

  color: $white;
  background-color: $cod-gray;

  &__layout {
    overflow-x: hidden;

    padding: rem($gap-medium) 0;
  }

  &__title {
    @include text-size(20px, 20px);

    margin-bottom: rem($gap);

    @media #{$screen-tablet} {
      @include text-size(24px, 24px);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;

    margin: 0 rem(-$gap-mini) rem(-$gap-small);

    &-item {
      margin-bottom: rem($gap-small);
      padding: 0 rem($gap-mini);
    }
  }

  &__data {
    margin-top: rem($gap-small);

    @media #{$screen-tablet} {
      margin-top: rem($gap);
    }
  }
}
</style>
