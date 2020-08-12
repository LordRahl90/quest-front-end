<!-- @format -->
<template>
  <a-layout id="components-layout-demo-custom-trigger" class="dashboard">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div style="height: 64px; background: #eee; line-height: 64px; text-align: center">
        Quest FE
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/dashboard">
            <a-icon type="dashboard" />
            <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/dashboard/cbt">
            <a-icon type="laptop" />
            <span>CBT</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/dashboard/profile">
            <a-icon type="user" />
            <span>Profile</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ padding: '24px', minHeight: '100vh' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import Widget from '@/components/Widget.vue';

  export default {
    name: 'Dashboard',
    data() {
      return {
        collapsed: false,
      }
    },
    methods: {},
    computed: {
      ...mapGetters({
        token: 'getToken',
      }),
    },
    created() {
      if (this.token === '') {
        this.$router.push('/')
      }
    },
  }
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
</style>
