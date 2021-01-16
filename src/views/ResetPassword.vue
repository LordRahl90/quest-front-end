<template>
  <div id="inspire">
    <div class="fill-height" style="padding: 0; background: #fff">
      <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="page_">
          <div class="bordered">
            <!-- <a-toolbar color="primary" dark flat>
                <a-toolbar-title>Welcome to Quest-FE</a-toolbar-title>
                <a-spacer />
            </a-toolbar>-->
            <p class="login-header">Welcome to Quest Student Zone</p>

            <a-input
              id="old_password"
              v-model="user.oldPassword"
              label="Old Password"
              name="old_password"
              type="password"
              style="margin-top: 20px"
              placeholder="Old Password"
            />

            <a-input
              id="new_password"
              v-model="user.newPassword"
              label="New Password"
              name="new_password"
              type="password"
              style="margin-top: 20px"
              placeholder="New Password"
            />

            <a-input
              id="new_cpassword"
              v-model="user.confirmNewPassword"
              label="Confirm New Password"
              name="new_cpassword"
              type="password"
              style="margin-top: 20px"
              placeholder="Comfirm New Password"
            />

            <a-row>
              <a-col :xs="24" :sm="24" :md="12" :lg="12">
                <a-button
                  :disabled="
                    user.oldPassword == '' ||
                    user.newPassword == '' ||
                    user.confirmNewPassword == ''
                  "
                  type="primary"
                  :loading="loading"
                  style="width; 100%; height: 40px; margin-top: 20px"
                  @click="updatePassword"
                  >Update Password</a-button
                >&nbsp;&nbsp;
              </a-col>
              <a-col
                :xs="24"
                :sm="24"
                :md="12"
                :lg="12"
                style="padding-top: 5%"
              >
                <router-link to="/">Login</router-link>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="photo page">
          <div class="heading">
            <!-- Welcome to Quest-FE -->
          </div>
          <img
            src="../assets/book.svg"
            alt
            style="width: 50%; margin: 10% 15% 10% 15%"
          />
          <img
            src="../assets/study.svg"
            alt
            style="width: 50%; margin: 10% 0 10 45%"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import eventbus from '../eventbus';
import { BACKEND } from '../constants';

export default {
  name: 'ResetPassword',
  data() {
    return {
      loading: false,
      user: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
    };
  },
  methods: {
    async updatePassword() {
      if (this.user.newPassword != this.user.confirmNewPassword) {
        eventbus.$emit('show_alert', {
          type: 'error',
          message: 'New Password does not match',
        });
        return;
      }
      this.loading = true;
      let payload = {
        old_password: this.user.oldPassword,
        new_password: this.user.newPassword,
        confirm_new_password: this.user.confirmNewPassword,
      };
      try {
        const url = `${BACKEND}/student/password/reset`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
        await axios.post(url, payload, config);
        this.loading = false;
        this.$router.push('/dashboard');
      } catch (err) {
        this.loading = false;
        let data = {};
        if (
          err.response.data.error != undefined ||
          err.response.data.error != null
        ) {
          data = {
            type: 'error',
            message: err.response.data.error,
          };
        } else {
          data = {
            type: 'error',
            message: err.response.data.message,
          };
        }

        // sample error handlinig. check the app.vue file to see the alert function
        eventbus.$emit('show_alert', data);
      }
    },
  },
  computed: {
    ...mapGetters({ token: 'getToken', authUser: 'getUser' }),
  },
  created() {
    if (this.token === '') {
      this.$router.push('/dashboard');
    }
    if (this.authUser.password_reset) {
      this.$router.push('/');
    }
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
  height: 100%;
  padding-top: 5%;

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
    margin: 0 5px;
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

@media only screen and (max-width: 500px) {
  body {
    background-color: indianred;
  }
}
</style>
