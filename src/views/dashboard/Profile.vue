<!-- @format -->

<template>
  <div class="profile">
    <a-row :gutter="50">
      <a-col :sm="32" :lg="2"></a-col>
      <a-col :sm="32" :lg="10">
        <div class="avatar shadow">
          <img :src="user.avatar" v-if="user.avatar" alt />
          <a-icon type="user" v-else fill="#fff" />
        </div>
        <div class="shadow" style="background: #fff; padding: 20px">
          <p>User Details</p>
          <h3>
            Name:
            <span>{{ user.full_name }}</span>
          </h3>
          <h3>
            Phone No.:
            <span>{{ user.phone }}</span>
          </h3>
          <h3>
            Address:
            <span>{{ user.address }}</span>
          </h3>
          <h3>
            Email Address:
            <span>{{ user.email }}</span>
          </h3>
          <h3>
            Guardian Phone No.:
            <span>{{ user.guardian_phone }}</span>
          </h3>
          <h2>Payments</h2>
          <a-list item-layout="horizontal" :data-source="student.payments">
            <a-list-item v-for="payment in student.payments" :key="payment.id">
              Amount: &#x20A6;<b>{{ payment.amount.toLocaleString() }}</b>
              <a-divider type="vertical" />
              Balance: &#x20A6;
              <b>{{ payment.balance.toLocaleString() }}</b>
            </a-list-item>
          </a-list>
        </div>
      </a-col>

      <a-col :sm="32" :lg="10">
        <h1>Last 10 games</h1>
        <TestHistory />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TestHistory from '@/components/TestHistory';
import eventbus from '../../eventbus';
export default {
  data() {
    return {};
  },
  components: { TestHistory },
  computed: {
    ...mapGetters({
      user: 'getUser',
      student: 'getStudent',
    }),
  },
  mounted() {
    eventbus.$emit('close-drawer');
  },
};
</script>
<style lang="scss" scoped>
.profile {
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto -30px;
    background-color: rgb(124, 124, 124);
    position: relative;
    z-index: 120;
    img {
      width: 100%;
      object-fit: cover;
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
