<!-- @format -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import eventbus from './eventbus'
  export default {
    name: 'app',
    mounted() {
      this.$message.config({
        top: '20px',
        duration: 7,
        maxCount: 1,
      })
      /**
       * @types = success or error or warning
       */
      eventbus.$on('show_alert', (data) => {
        this.$message[data.type](data.message)
      })
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .leader-board {
    ul {
      padding: 0;
      li {
        height: 80px;
        list-style-type: none;
        // padding: 5px;
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
          width: calc(90% - 75px);
          .name {
            display: block;
            height: 34%;
            font-size: 18px;
            margin-top: 12px;
            font-weight: 600;
            .time {
              float: right;
              font-size: 12px;
              font-weight: 300;
            }
          }
          .btm {
            display: block;
            height: 50%;
            .sub {
              font-size: 16px;
              position: relative;
              top: 5px;
            }
            .score {
              font-size: 24px;
              float: right;
              // font-weight: 500;
              position: relative;
              top: -6px;
            }
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

  .ant-layout-header {
    padding-left: 20px !important;
  }
  .ant-timeline-item {
    padding: 10px 0 0;
    /* margin: 16px 0px; */
  }
  input {
    height: 50px !important;
    width: 100%;
  }
  select {
    height: 50px !important;
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background-color: #fff;
  }
  select:focus {
    outline: none;
  }
</style>
