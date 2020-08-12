<!-- @format -->

<template>
  <div class="profile">
    <a-row :gutter="10">
      <a-col :sm="32" :lg="6"></a-col>
      <a-col :sm="32" :lg="12">
        <img src="../../assets/winner.svg" class="trophy" alt />
        <div class="shadow">
          <p>
            Your score
            <span style="float: right">{{ feedback.percentage.toFixed(2) }}%</span>
          </p>
          <p>
            Duration
            <span style="float: right">10 minutes</span>
          </p>
          <p>
            Total questions
            <span style="float: right">{{ feedback.total }}</span>
          </p>
          <p>
            Passed
            <span style="float: right">{{ feedback.pass }}</span>
          </p>
          <p>
            Failed
            <span style="float: right">{{ failed }}</span>
          </p>
          <p>
            Current Subject Rank
            <span style="float: right">{{ rank }}</span>
          </p>
          <p>
            Overall Rank
            <span style="float: right">{{ rank }}</span>
          </p>
          <a-button style="float: right; margin-top: -10px;" type="primary" @click="restart">Restart</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      feedback: "getFeedback",
      student: "getStudent"
    }),
    failed() {
      if (this.feedback === undefined || this.feedback == null) {
        return 0;
      }
      return this.feedback.total - this.feedback.pass;
    },
    rank() {
      if (this.student.ranking == undefined) {
        return 0;
      }
      return this.student.ranking.rank;
    }
  },
  methods: {
    restart() {
      this.$router.push("/dashboard/cbt");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.profile {
  padding-top: 12px;
  .trophy {
    width: 40%;
    margin: 0 30%;
  }
  .shadow {
    background-color: #fff;
    padding: 30px 20px;
    margin: 0 30px;
    border-radius: 5px;
    border-top: 10px solid #000;
    p {
      border-bottom: 1px solid #eee;
      padding-bottom: 6px;
      font-weight: 600;
      font-size: 20px;
    }
    h1 {
      font-size: 60px;
      color: #2f2f2f;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>
