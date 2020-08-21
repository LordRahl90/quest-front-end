<!-- @format -->

<template>
  <div id="inspire">
    <div class="fill-height" style="padding: 0; background: #fff">
      <a-row>
        <a-col :span="12" class="page">
          <div class="heading">
            <!-- Welcome to Quest-FE -->
          </div>
          <img src="../assets/book.svg" alt style="width: 50%; margin: -60px 15% 10px 15%" />
          <img src="../assets/study.svg" alt style="width: 50%; margin: 0 0 0 45%" />
        </a-col>
        <a-col :span="12" class="page_">
          <div class="bordered">
            <!-- <a-toolbar color="primary" dark flat>
                <a-toolbar-title>Welcome to Quest-FE</a-toolbar-title>
                <a-spacer />
            </a-toolbar>-->
            <p class="login-header">Welcome to Quest Student Zone</p>
            <a-input v-model="user.email" label="Email" name="email" type="text" />

            <a-input
              id="password"
              v-model="user.password"
              label="Password"
              name="password"
              type="password"
              style="margin-top: 20px"
            />
            <a-button
              type="primary"
              :loading="loading"
              style="width; 100%; height: 40px; margin-top: 20px"
              @click="authenticate"
            >Login</a-button>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import { BACKEND } from '../constants';
import eventbus from '../eventbus';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      message: 'hello',
      loading: false,
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
      this.loading = true;
      try {
        const response = await axios.post(url, { email, password });
        const { user, token } = response.data.data;
        this.$store.dispatch('updateUser', user);
        this.$store.dispatch('updateToken', token);
        this.loading = false;
        this.$router.push('/dashboard');
      } catch (err) {
        this.loading = false;
        let data = {
          type: 'error',
          message: err.response.data.message,
        };
        // sample error handlinig. check the app.vue file to see the alert function
        eventbus.$emit('show_alert', data);
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
  // width: 100%;
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
  // width: 100%;

  .bordered {
    border: 1px solid #eee;
    margin: 0 100px;
    background-color: #fff;
    transform: translateY(50%);
    padding: 20px;
    .login-header {
      width: 100%;
      padding: 0 15px 15px;
      color: #383838;
      font-size: 20px;
      font-weight: 400;
      border-bottom: 0.3px solid #eee;
      // background-color: #008cff50;
    }
  }
}
</style>
