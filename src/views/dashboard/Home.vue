<!-- @format -->

<template>
  <div class="home">
    <a-row :gutter="10">
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-1">
          <p class="count">1401</p>
          <p class="text">Ranking</p>
        </div>
      </a-col>
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-2">
          <p class="count">&#x20A6;1,401</p>
          <p class="text">Amount Paid</p>
        </div>
      </a-col>
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-3">
          <p class="count">1401</p>
          <p class="text">Total Tests</p>
        </div>
      </a-col>
      <a-col :sm="32" :lg="6">
        <div class="my-widget bg-4">
          <p class="count">20%</p>
          <p class="text">Pass Percentage</p>
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
import Schedule from "@/components/Schedule";
import Leaderboard from "@/components/Leaderboard";
import TestHistory from "@/components/TestHistory";

export default {
  components: { Schedule, Leaderboard, TestHistory }
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
