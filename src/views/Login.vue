<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid style="padding: 0; background: #fff">
        <v-row align="center" justify="">
          <v-col cols="6" sm="8" md="6" class="page">
            <div class="heading">
              Welcome to Quest-FE
            </div>
            <img src="../assets/book.svg" alt="" style="width: 50%; margin: -60px 15% 10px 15%" />
            <img src="../assets/study.svg" alt="" style="width: 50%; margin: 0 0 0 45%" />
          </v-col>
          <v-col cols="12" sm="8" md="6" class="page_">
            <div class="bordered">
              <!-- <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Welcome to Quest-FE</v-toolbar-title>
                <v-spacer />
              </v-toolbar> -->
              <p class="login-header">
                Login
              </p>
              <v-card-text class="p20">
                <v-form>
                  <v-text-field v-model="user.email" label="Email" name="email" type="text" />

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
  height: 100vh;
  padding-top: 200px;
  width: 100%;
  // background-image: url('../assets/book.svg');
  // background-size: 30%;
  // background-position-x: 97%;
  // background-position-y: 90%;
  .heading {
    position: absolute;
    top: 50px;
    left: 0px;
    width: 50%;
    text-align: center;
    font-size: 24px;
    color: #383838;
  }
}
.page_ {
  height: 100vh;
  background-color: #fafafa;
  width: 100%;

  .bordered {
    border: 1px solid #eee;
    margin: 0 100px;
    background-color: #fff;
    transform: translateY(50%);
    .login-header {
      width: 100%;
      padding: 15px;
      color: #383838;
      font-size: 20px;
      font-weight: 400;
      border-bottom: 0.3px solid #eee;
      // background-color: #008cff50;
    }
  }
}
</style>
