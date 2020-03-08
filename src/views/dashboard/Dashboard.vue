/* eslint-disable import/no-unresolved */
<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg3 sm6 xs12>
        <Widget
          icon="domain"
          title="1,287,687"
          sub-title="13% higher yesterday"
          sup-title="Today's Visits"
          color="#00b297"
        />
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <Widget
          icon="money_off"
          title="$141,291"
          sub-title="$117,212 before tax"
          sup-title="Today's Sales"
          color="#dc3545"
        />
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <Widget
          icon="computer"
          title="33.45%"
          sub-title="13% average duration"
          sup-title="% Unique Visits"
          color="#0866C6"
        />
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <Widget
          icon="watch_later"
          title="13.00%"
          sub-title="17.25% on average time"
          sup-title="Bounce Rate"
          color="#1D2939"
        />
      </v-flex>
      <!-- Widgets Ends -->

      <v-flex d-flex lg6 sm6 xs12>
        <h1>Leader Board</h1>
      </v-flex>

      <v-flex d-flex lg6 sm6 xs12>
        <h1>Last 10 Test Scores</h1>
      </v-flex>

      <v-flex d-flex lg6 sm6 xs12>
        <h1>Subject List</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Widget from '@/components/Widget.vue';

export default {
  name: 'Dashboard',
  components: {
    Widget,
  },
  methods: {},
  computed: {
    ...mapGetters({
      token: 'getToken',
    }),
  },
  created() {
    if (this.token === '') {
      this.$router.push('/');
    }
  },
};
</script>
