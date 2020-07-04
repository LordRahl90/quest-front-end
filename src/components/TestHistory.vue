<!-- @format -->
<template>
  <div class="leader-board">
    <div style="background-color: #fff; padding: 20px" class="shadow" v-if="loading">
      <a-skeleton active :paragraph="{ rows: 2 }" />
      <a-skeleton active :paragraph="{ rows: 2 }" />
      <a-skeleton active :paragraph="{ rows: 2 }" />
      <a-skeleton active :paragraph="{ rows: 2 }" />
    </div>
    <ul v-else>
      <li class="shadow" v-for="(v, i) in history" :key="i">
        <div class="position">{{ i + 1 }}</div>
        <div class="img">
          <img :src="v.avatar" alt />
        </div>
        <div class="user">
          <span class="name">
            {{ v.subject }}
            <span class="time">{{ v.duration }} mins</span>
          </span>
          <span class="btm">
            <span class="sub">Passed: {{ v.passed }}</span>
            <span class="score">{{ v.score }}%</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { BACKEND } from "../constants";
import eventbus from "../eventbus";

export default {
  name: "TestHistory",
  data: function() {
    return {
      history: [],
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      token: "getToken"
    })
  },
  methods: {
    async getRecentTests() {
      const url = `${BACKEND}/student/cbt/history?count=10`;
      this.loading = true;

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        };
        const response = await axios.get(url, config);
        this.history = response.data.data;
        this.loading = false;
      } catch (e) {
        this.loading = false;
        let data = {
          type: "error",
          message: e.response.data.message
        };
        // sample error handlinig. check the app.vue file to see the alert function
        eventbus.$emit("show_alert", data);
      }
    }
  },
  created() {
    this.getRecentTests();
  }
};
</script>
