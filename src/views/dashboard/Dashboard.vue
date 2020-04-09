/* eslint-disable import/no-unresolved */
<template>
  <v-container fluid grid-list-xl style="padding: 20px">
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg3 sm6 xs12>
        <div class="my-widget bg-1">
          <p class="count">1401</p>
          <p class="text">visitors</p>
          <v-icon
            style="    font-size: 100px;
    display: inline;
    color: #fff;
    position: relative;
    top: -47px;
    width: 40px;
    height: 40px;
    z-index: 100000;"
            >adobe-acrobat</v-icon
          >
        </div>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <div class="my-widget bg-2">
          <p class="count">417</p>
          <p class="text">test</p>
        </div>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <div class="my-widget bg-3">
          <p class="count">1230</p>
          <p class="text">visitors</p>
        </div>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <div class="my-widget bg-4">
          <p class="count">15</p>
          <p class="text">subjects</p>
        </div>
      </v-flex>
      <!-- Widgets Ends -->

      <v-flex lg5 sm5 xs12 class="leader-wrap">
        <h1>Leader Board</h1>
        <div class="leader-board">
          <ul>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/john@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/abott@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/sam@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/mike@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/jane@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
          </ul>
        </div>
      </v-flex>

      <v-flex lg5 sm5 xs12 class="leader-wrap">
        <h1>Last 10 games</h1>
        <div class="leader-board">
          <ul>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/john@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/abott@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/sam@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/mike@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
            <li>
              <div class="position">1</div>
              <div class="img">
                <img
                  src="
                  https://api.adorable.io/avatars/285/jane@adorable.png"
                  alt=""
                />
              </div>
              <div class="user">
                <span class="name">
                  Sam Jones
                </span>
                <span class="score">
                  12,321
                </span>
              </div>
            </li>
          </ul>
        </div>
      </v-flex>

      <v-flex lg2 sm2 xs12 class="leader-wrap">
        <h1>Subjects</h1>
        <div class="leader-board">
          <ul>
            <li class="bg-1 subject">
              Mathematics
            </li>
            <li class="bg-2 subject">
              Mathematics
            </li>
            <li class="bg-4 subject">
              Mathematics
            </li>
            <li class="bg-2 subject">
              Mathematics
            </li>
            <li class="bg-3 subject">
              Mathematics
            </li>
            <li class="bg-2 subject">
              Mathematics
            </li>
            <li class="bg-2 subject">
              Mathematics
            </li>
            <li class="bg-1 subject">
              Mathematics
            </li>
            <li class="bg-4 subject">
              Mathematics
            </li>
            <li class="bg-1 subject">
              Mathematics
            </li>
          </ul>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
// import Widget from '@/components/Widget.vue';

export default {
  name: 'Dashboard',
  components: {
    // Widget,
  },
  methods: {},
  computed: {
    ...mapGetters({
      token: 'getToken',
    }),
  },
  created() {
    if (this.token === '') {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
.my-widget {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: right;
  border-radius: 5px;
  padding: 20px;
  .count {
    font-size: 45px;
    margin: 0;
  }
  .text {
    font-size: 24px;
    margin: 0;
    margin-top: -12px;
  }
}
.leader-wrap {
  padding: 20px;
  // border: 1px solid #eee;
  // background: #fff;
  h1 {
    font-size: 20px;
    font-weight: 300;
    color: rgb(138, 138, 138);
  }
  .leader-board {
    height: 500px;
    overflow: scroll;
    ul {
      padding: 0;
      li {
        height: 80px;
        list-style-type: none;
        // padding: 5px;
        box-shadow: 2px 2px 5px rgb(224, 224, 224);
        background-color: #fff;
        margin-bottom: 12px;
        border-radius: 5px;
        width: 98%;
        .position {
          width: 10%;
          float: left;
          font-size: 20px;
          margin-top: 23px;
          text-align: center;
          // border: 1px solid #eee;
          // border-radius: 50%;
        }
        .img {
          width: 60px;
          height: 60px;
          margin-top: 10px;
          border-radius: 5px;
          overflow: hidden;
          float: left;
          img {
            width: 100%;
          }
        }
        .user {
          float: left;
          height: 100%;
          padding-left: 20px;
          .name {
            display: block;
            height: 34%;
            font-size: 18px;
            margin-top: 12px;
          }
          .score {
            display: block;
            height: 50%;
            font-size: 20px;
            font-weight: 500;
          }
        }
      }
      .subject {
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
.bg-1 {
  background-color: burlywood !important;
}
.bg-2 {
  background-color: rgb(220, 53, 69) !important;
}
.bg-3 {
  background-color: rgb(8, 102, 198) !important;
}
.bg-4 {
  background-color: rgb(29, 41, 57) !important;
}
</style>
