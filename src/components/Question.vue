<!-- @format -->

<template>
  <div class="question">
    <p class="title">
      Question {{ number }}
      <span
        style="display:block; font-size: 10px; font-weight: 300"
        ref="inst"
      ></span>
    </p>
    <p class="question" ref="question"></p>
    <a-radio-group name="options" v-model="response" @change="updateAnswer">
      <a-row>
        <a-col :span="24" v-for="(value,index) in options" :key="index">
          <a-radio :value="index">
            <span>{{ value }}</span>
          </a-radio>
        </a-col>
      </a-row>
    </a-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      response: {},
      options: []
    };
  },
  props: ["question", "number"],
  methods: {
    updateAnswer(e) {
      let res = { questionID: this.question.id, response: e.target.value };
      this.$store.dispatch("updateResponse", res);
    },
    setData() {
      let question = this.$refs.question;
      let inst = this.$refs.inst;
      question.innerHTML = this.question.question;
      inst.innerHTML = this.question.section;
      this.options = this.question.option;
    }
  },
  updated() {
    this.setData();
  },
  mounted() {
    this.setData();
  }
};
</script>
<style lang="scss" scoped>
.question {
  .title {
    font-size: 16px;
    font-weight: 600;
  }
  .question {
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
  }
}
</style>
