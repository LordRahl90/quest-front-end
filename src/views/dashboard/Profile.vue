<!-- @format -->

<template>
  <div class="profile">
    <a-row :gutter="50">
      <a-col :sm="32" :lg="2"></a-col>
      <a-col :sm="32" :lg="10">
        <div class="avatar shadow">
          <img src="https://api.adorable.io/avatars/285/john@adorable.png" alt="" />
        </div>
        <div class="shadow" style="background: #fff; padding: 20px">
          <p>
            User Details
          </p>
          <h3>
            Name: <span>{{ user.full_name }}</span>
          </h3>
          <h3>
            Phone No.: <span>{{ user.phone }}</span>
          </h3>
          <h3>
            Address: <span>{{ user.address }}</span>
          </h3>
          <h3>
            Email Address: <span>{{ user.email }}</span>
          </h3>
          <h3>
            Guardian Phone No.: <span>{{ user.guardian_phone }}</span>
          </h3>
        </div>
      </a-col>
      <a-col :sm="32" :lg="10">
        <h1>Last 10 games</h1>
        <div class="leader-board">
          <ul>
            <li class="shadow" v-for="user in 10" :key="user">
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/john@adorable.png"
                  alt
                />
              </div>
              <div class="user">
                <span class="name">
                  Mathematics
                  <span class="time">02:25 PM</span>
                </span>
                <span class="btm">
                  <span class="score" style="float: left; top: 1px">12,321</span>
                </span>
              </div>
            </li>
          </ul>
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
    .avatar {
      width: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto -30px;
      img {
        width: 100%;
      }
    }
    .shadow {
      p {
        border-bottom: 1px solid #eee;
        padding-bottom: 12px;
        font-weight: 600;
      }
      h3 {
        font-size: 14px;
        color: #2f2f2f;
        font-weight: 600;
        margin-bottom: 18px;
        span {
          font-weight: 300;
          padding-left: 5px;
        }
      }
    }
  }
</style>
