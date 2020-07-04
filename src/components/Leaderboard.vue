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
      <li class="shadow" v-for="(v, k) in leaderboard" :key="k">
        <div class="position">{{ k + 1 }}</div>
        <div class="img">
          <img :src="v.student_photo" alt="Profile Photo" />
        </div>
        <div class="user">
          <span class="name">{{ v.full_name }}</span>
          <span class="score">Pass Rate: {{ v.pass_rate }}%</span>
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
  name: "Leaderboard",
  data: function() {
    return {
      loading: false,
      leaderboard: []
    };
  },
  computed: {
    ...mapGetters({
      token: "getToken"
    })
  },
  methods: {
    async getLeaderboard() {
      const url = `${BACKEND}/leaderboard`;
      this.loading = true;

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        };
        const response = await axios.get(url, config);
        this.leaderboard = response.data.data;
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
    this.getLeaderboard();
  }
};
</script>
