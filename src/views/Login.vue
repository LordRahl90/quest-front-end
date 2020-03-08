<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user.email"
                    label="Login"
                    name="email"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    v-model="user.password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="authenticate">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import { BACKEND } from '../constants';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      message: 'hello',
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['updateUser', 'updateToken']),
    async authenticate() {
      const { email, password } = this.user;
      if (email === '' || password === '') {
        return;
      }

      const url = `${BACKEND}/student/login`;
      try {
        const response = await axios.post(url, { email, password });
        const { user, token } = response.data.data;
        this.$store.dispatch('updateUser', user);
        this.$store.dispatch('updateToken', token);

        this.$router.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters({ token: 'getToken' }),
  },
};
</script>
