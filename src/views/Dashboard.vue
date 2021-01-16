<!-- @format -->
<template>
  <a-layout id="components-layout-demo-custom-trigger" class="dashboard">
    <a-drawer
      title="Quest Tutors"
      placement="left"
      :closable="true"
      :visible="visible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <a-list item-layout="horizontal">
        <a-list-item @click="onClose()">
          <router-link class="drawer-link" to="/dashboard">
            <!-- <a-icon type="dashboard" /> -->
            <span>Dashboard</span>
          </router-link>
        </a-list-item>

        <a-list-item>
          <router-link to="/dashboard/cbt">
            <!-- <a-icon type="laptop" /> -->
            <span>CBT</span>
          </router-link>
        </a-list-item>

        <a-list-item>
          <router-link to="/dashboard/profile">
            <!-- <a-icon type="user" /> -->
            <span>Profile</span>
          </router-link>
        </a-list-item>
        <a-list-item @click="logout">
          <span>Logout</span>
        </a-list-item>
      </a-list>
    </a-drawer>
    <a-layout>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Quest Tutors"
        v-bind:sub-title="salutation"
        backIcon="menu"
      >
        <a-icon
          v-if="!examStarted"
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="showDrawer"
        />
      </a-page-header>

      <!-- <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          v-if="!examStarted"
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="showDrawer"
        />
        <span class="welcome">Welcome, {{ user.full_name }}</span>
        <span
          style="color: red; float: right; margin-right: 30px; cursor: pointer"
          @click="logout()"
          v-if="!examStarted"
        >
          <a-icon type="logout" />Logout
        </span>
      </a-layout-header> -->
      <a-layout-content :style="{ padding: '24px', minHeight: '100vh' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import eventbus from '../eventbus';

export default {
  name: 'Dashboard',
  data() {
    return {
      collapsed: true,
      visible: false,
      examStarted: false,
    };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      localStorage.clear();
      this.$router.push('/');
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    showDashboard() {
      this.$router.push('/dashboard');
    },
  },
  computed: {
    ...mapGetters({
      token: 'getToken',
      user: 'getUser',
    }),
    salutation() {
      return 'Welcome, ' + this.user.full_name;
    },
  },
  created() {
    if (this.token === '') {
      this.$router.push('/');
    }

    //get schedule
    //get leaderboard
    //get test history
  },
  mounted() {
    eventbus.$on('exam_started', () => {
      this.collapsed = true;
      this.examStarted = true;
    });
    eventbus.$on('exam_ended', () => {
      this.collapsed = false;
      this.examStarted = false;
    });
    eventbus.$on('close-drawer', () => {
      this.onClose();
    });
  },
};
</script>

<style lang="scss">
.dashboard {
  min-height: 100vh;
  text-align: left;
}
.my-widget {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: right;
  border-radius: 5px;
  padding: 20px;
  .count {
    font-size: 45px;
    margin: 0;
  }
  .text {
    font-size: 24px;
    margin: 0;
    margin-top: -12px;
  }
}
.welcome {
  padding-left: 20%;
  font-size: 2em;
  font-weight: bold;
}
.shadow {
  box-shadow: 2px 2px 5px rgb(224, 224, 224);
}
.bw {
  background-color: #fff;
}
.bg-1 {
  background-color: burlywood !important;
}
.bg-11 {
  background-color: #00801c !important;
}
.bg-2 {
  background-color: rgb(220, 53, 69) !important;
}
.bg-3 {
  background-color: rgb(8, 102, 198) !important;
}
.bg-4 {
  background-color: rgb(29, 41, 57) !important;
}
drawer-link {
  color: #000000;
}
</style>
