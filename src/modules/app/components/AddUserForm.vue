<template>
  <form
    class="form"
    @submit.prevent="handleSubmit"
  >
    <div class="form__block">
      <p class="form__title">
        Добавление пользователя
      </p>
    </div>
    <div class="form__block">
      <div class="form__field">
        <v-input
          v-model.trim="name"
          label="Имя"
          required
          :is-error="$v.name.$error"
          :error-text="errorText.required"
        />
      </div>
      <div class="form__field">
        <v-input
          v-model="phone"
          label="Телефон"
          required
          placeholder="+ 8 888 888 88 88"
          mask="+ 9 999 999 99 99"
          :is-error="$v.phone.$error"
          :error-text="errorText.phone"
        />
      </div>
      <div class="form__field">
        <v-select
          v-model="bossId"
          :options="usersOptions"
          label="Руководитель"
        />
      </div>
    </div>
    <div class="form__block">
      <v-button type="submit">
        Сохранить
      </v-button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';
import { FORM_RULES, FORM_ERROR_TEXT } from '@/common/constants';
import { phoneNumber } from '@/common/helpers';

export default {
  name: 'AddUserForm',

  data() {
    return {
      name: '',
      phone: '',
      bossId: '',
      errorText: FORM_ERROR_TEXT,
    };
  },

  validations: {
    name: {
      required,
      maxLength: maxLength(FORM_RULES.maxLength.name),
    },
    phone: {
      required,
      phoneNumber,
    },
  },

  computed: {
    ...mapGetters('Users', ['usersOptions']),
  },

  methods: {
    ...mapMutations('Users', ['ADD_EMPLOY']),
    ...mapActions('Users', ['saveUsers']),

    handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const data = {
        user: {
          id: String(new Date().getTime()),
          name: this.name,
          phone: this.phone,
        },
        parentId: this.bossId,
      };

      this.ADD_EMPLOY(data);
      this.saveUsers();
      this.$emit('submit');
    },
  },
};
</script>
