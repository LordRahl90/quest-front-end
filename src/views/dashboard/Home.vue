<!-- @format -->

<template>
  <div class="home">
    <a-row :gutter="48">
      <a-col :sm="32" :md="32" :lg="6">
        <div class="my-widget bg-1">
          <p class="text">Ranking</p>
          <p class="count">{{ rank }}</p>
        </div>
      </a-col>
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-2">
          <p class="text">Remaining Balance</p>
          <p class="count">&#x20A6;{{ amountPaid }}</p>
        </div>
      </a-col>
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-3">
          <p class="text">Total Tests</p>
          <p class="count">{{ totalTests }}</p>
        </div>
      </a-col>
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-4">
          <p class="text">Pass Rate</p>
          <p class="count">{{ passRate }}%</p>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="20" style="padding-top: 40px">
      <a-col :lg="8" :sm="32" :xs="32" class="leader-wrap">
        <h1>Today's Schedule</h1>
        <Schedule />
      </a-col>

      <a-col :lg="7" :sm="32" :xs="32" class="leader-wrap">
        <h1>Leader Board</h1>
        <Leaderboard />
      </a-col>

      <a-col :lg="9" :sm="32" :xs="32" class="leader-wrap">
        <h1>Last 10 games</h1>
        <TestHistory />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import { BACKEND } from '../../constants';
import Schedule from '@/components/Schedule';
import Leaderboard from '@/components/Leaderboard';
import TestHistory from '@/components/TestHistory';
import eventbus from '../../eventbus';

export default {
  components: { Schedule, Leaderboard, TestHistory },
  computed: {
    ...mapGetters({ token: 'getToken', student: 'getStudent' }),
    rank() {
      return this.student.ranking == null ? 0 : this.student.ranking.rank;
    },
    totalTests() {
      return this.student.ranking == null ? 0 : this.student.ranking.counts;
    },
    passRate() {
      return this.student.ranking == null ? 0 : this.student.ranking.pass_rate;
    },
    amountPaid() {
      if (
        this.student.payments === undefined ||
        this.student.payments.length == 0
      ) {
        return 0;
      }

      return this.student.payments[this.student.payments.length - 1].balance;
    },
  },
  methods: {
    async getStudentProfile() {
      const url = `${BACKEND}/student/me`;
      this.loading = true;

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
        const response = await axios.get(url, config);
        this.$store.dispatch('updateStudent', response.data.data);
        this.loading = false;
      } catch (e) {
        this.loading = false;
        let data = {
          type: 'error',
          message:
            e.response.data.message == undefined ||
            e.response.data.message == ''
              ? 'An error occurred'
              : e.response.data.message,
        };
        // sample error handlinig. check the app.vue file to see the alert function
        eventbus.$emit('show_alert', data);
      }
    },
  },
  created() {
    this.getStudentProfile();
  },
};
</script>
<style lang="scss">
.home {
  .leader-wrap {
    padding: 20px;
    h1 {
      font-size: 20px;
      font-weight: 300;
      color: rgb(138, 138, 138);
    }
    .timeline {
      height: 60px;
      padding: 8px;
      width: 95%;
      border-radius: 6px;
      color: #fff;
      text-align: left;
      p {
        font-size: 12px;
        font-weight: 400;
        span {
          float: right;
          font-size: 12px;
        }
      }
      .topp {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
