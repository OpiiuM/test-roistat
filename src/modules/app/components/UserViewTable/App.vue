<template>
  <div class="smart-table">
    <table-head
      v-if="Object.keys(head).length > 0"
      :data="head"
      :sort-key="sortKey"
      @sort="SET_SORT_KEY"
    />

    <div
      v-for="(data, index) in body"
      :key="index"
    >
      <table-row
        :data="{
          name: data.name,
          phone: data.phone
        }"
        :level="level"
      />

      <user-view-table
        v-if="data.employees.length > 0"
        :body="data.employees"
        :level="level + 1"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import TableHead from '@/modules/app/components/UserViewTable/Head';
import TableRow from '@/modules/app/components/UserViewTable/Row';

export default {
  name: 'UserViewTable',

  components: {
    TableHead,
    TableRow,
  },

  props: {
    head: {
      type: Object,
      default: () => ({}),
    },
    body: {
      type: Array,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    ...mapState(['sortKey']),
  },

  methods: {
    ...mapMutations(['SET_SORT_KEY']),
  },
};
</script>
