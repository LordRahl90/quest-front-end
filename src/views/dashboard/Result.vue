<!-- @format -->

<template>
  <div class="profile">
    <a-row :gutter="10">
      <a-col :sm="32" :lg="6"> </a-col>
      <a-col :sm="32" :lg="12">
        <img src="../../assets/winner.svg" class="trophy" alt="" />
        <div class="shadow">
          <p>Your score</p>
          <h1>80%</h1>

          <a-button style="float: right; margin-top: -20px;" type="primary">Restart</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        user: 'getUser',
      }),
    },
    mounted() {
      console.log(this.user)
    },
  }
</script>
<style lang="scss" scoped>
  .profile {
    padding-top: 30px;
    .trophy {
      width: 80%;
      margin: 0 10%;
    }
    .shadow {
      background-color: #fff;
      padding: 30px;
      margin: 0 30px;
      border-radius: 5px;
      p {
        border-bottom: 1px solid #eee;
        padding-bottom: 12px;
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
