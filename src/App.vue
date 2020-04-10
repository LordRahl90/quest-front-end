<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute class="mt-12" app v-if="token !== ''">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{ user.full_name }}</v-list-item-title>
          <v-list-item-subtitle>...we make you a conqueror.</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item link :to="dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="examination">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>CBT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark v-if="token">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Quest Tutors</v-toolbar-title>
      <v-spacer />
      <v-btn text v-if="token !== ''">Sign Out</v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    drawer: true,
    right: null,
    dashboard: '/dashboard',
    examination: '/examination',
  }),
  computed: {
    mini() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    ...mapGetters({ token: 'getToken', user: 'getUser' }),
  },
};
</script>

<style lang="scss">
.t-center {
  text-align: center !important;
}
.v-btn {
  letter-spacing: unset !important;
}
</style>
