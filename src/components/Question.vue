<!-- @format -->

<template>
  <div class="question">
    <p class="title">
      Question {{ number }}
      <span style="display:block; font-size: 10px; font-weight: 300" ref="inst"> </span>
    </p>
    <p class="question" ref="question"></p>
    <a-checkbox-group @change="updateAnswer">
      <a-row>
        <a-col :span="24">
          <a-checkbox :value="question.option.a">
            <span ref="optionA"></span>
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="question.option.b">
            <span ref="optionB"></span>
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="question.option.c">
            <span ref="optionC"></span>
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="question.option.d">
            <span ref="optionD"></span>
          </a-checkbox>
        </a-col>
        <a-col :span="24" v-if="question.option.e">
          <a-checkbox :value="question.option.e">
            <span ref="optionE"></span>
          </a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        response: '',
      }
    },
    props: ['question', 'number'],
    methods: {
      updateAnswer(response) {
        console.log(this.question.id, response)
        this.$emit('answered', this.question.id, response)
      },
      setData() {
        let question = this.$refs.question
        let optionA = this.$refs.optionA
        let inst = this.$refs.inst
        let optionB = this.$refs.optionB
        let optionC = this.$refs.optionC
        let optionD = this.$refs.optionD
        let optionE = this.$refs.optionE
        question.innerHTML = this.question.question
        inst.innerHTML = this.question.section
        optionA.innerHTML = this.question.option.a
        optionB.innerHTML = this.question.option.b
        optionC.innerHTML = this.question.option.c
        optionD.innerHTML = this.question.option.d
        optionE ? (optionE.innerHTML = this.question.option.e) : null
        console.log(this.question)
      },
    },
    updated() {
      this.setData()
    },
    mounted() {
      this.setData()
    },
  }
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
