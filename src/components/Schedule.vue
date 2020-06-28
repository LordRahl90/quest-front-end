<!-- @format -->
<template>
  <a-timeline mode="alternate">
    <a-timeline-item color="blue" v-for="v in schedule" :key="v.id">
      <div class="shadow timeline bw bg-3">
        <p class="topp">{{ v.subject}}</p>
        <p>
          {{ v.tutor }}
          <span>{{ v.duration }} hours</span>
        </p>
      </div>
    </a-timeline-item>
  </a-timeline>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { BACKEND } from "../constants";
import eventbus from "../eventbus";

export default {
  name: "Schedule",
  data: function() {
    return {
      schedule: []
    };
  },
  computed: {
    ...mapGetters({
      token: "getToken"
    })
  },
  methods: {
    async getSchedule() {
      const url = `${BACKEND}/student/schedule`;
      this.loading = true;

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        };
        const response = await axios.get(url, config);
        this.schedule = response.data.data;
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
    this.getSchedule();
  }
};
</script>