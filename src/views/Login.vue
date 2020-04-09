<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="6" sm="8" md="6" class="page">
            <img src="../assets/book.svg" alt="" style="width: 70%; margin: 0 15%" />
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <div class="bordered">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Welcome to Quest-FE</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text class="p20">
                <v-form>
                  <v-text-field v-model="user.email" label="Login" name="email" type="text" />

                  <v-text-field
                    id="password"
                    v-model="user.password"
                    label="Password"
                    name="password"
                    type="password"
                    style="margin-top: 20px"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions class="p20">
                <v-spacer />
                <v-btn color="primary" @click="authenticate">Login</v-btn>
              </v-card-actions>
            </div>
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
        email: 'tolaabbey009@gmail.com',
        password: 'secret',
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

<style lang="scss" scoped>
.page-title {
  font-size: 25px;
  margin-left: 20px;
}
.p20 {
  padding: 20px !important;
}
.page {
  background-color: #fff;
  height: 100vh;
  padding-top: 200px;
  // background-image: url('../assets/book.svg');
  // background-size: 30%;
  // background-position-x: 97%;
  // background-position-y: 90%;
}
.bordered {
  background-color: #fff;
  border: 1px solid #eee;
  margin: 0 100px;
}
</style>
