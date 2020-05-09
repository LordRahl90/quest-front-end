<!-- @format -->

<template>
  <div>
    <div class="not-started" v-if="!started">
      <a-row :gutter="10" style="padding-top: 40px">
        <a-col :lg="12" :sm="32" :xs="32" class="leader-wrap">
          <h1>Leader Board</h1>
          <div class="leader-board">
            <ul>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/john@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/abott@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/sam@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/mike@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/jane@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/abott@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/sam@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/mike@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
              <li class="shadow">
                <div class="position">1</div>
                <div class="img">
                  <img
                    src="
                    https://api.adorable.io/avatars/285/jane@adorable.png"
                    alt
                  />
                </div>
                <div class="user">
                  <span class="name">Sam Jones</span>
                  <span class="score">12,321</span>
                </div>
              </li>
            </ul>
          </div>
        </a-col>
        <a-col :lg="12" :sm="32" :xs="32" class="leader-wrap">
          <div class="bordered">
            <p
              class="login-header"
              style="font-size: 20px; border-bottom: 1px solid #eee; padding-bottom: 12px;"
            >Start Examination</p>

            <label>Select Subject</label>
            <select name id v-model="exam.subject" style="margin-bottom: 20px">
              <option>Select subject</option>
              <option
                v-for="subject in Object.values(subjects)"
                :value="subject"
                :key="subject"
              >{{ subject }}</option>
            </select>

            <label>Duration</label>
            <a-input id="password" v-model="exam.duration" label="text" style="margin-top: 0px" />
            <a-button
              type="primary"
              :loading="loading"
              style="width; 100%; height: 40px; margin-top: 20px"
              @click="proceed"
            >Start</a-button>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="started" v-else>
      <div>
        <span
          style="font-size: 20px; font-weight: 600; text-transform: capitalize"
        >{{ info.subject }}</span>
        <flip-countdown
          style="margin-bottom: 20px; position: absolute; right: 30px;margin-top: -30px"
          :deadline="newTime"
        />
        <vue-countdown
          :emit-events="true"
          :time="newTimeInt"
          @progress="handleProgress"
          @end="timeUp"
        ></vue-countdown>
      </div>

      <div style="margin: 100px 2% 2%; padding: 2%;">
        <a-tabs v-model="current">
          <a-tab-pane v-for="(n, i) in questions" :key="i" :tab="`Question ${i + 1}`">
            <question :question="n" :number="i + 1" />
          </a-tab-pane>
        </a-tabs>
        <div class="steps-action">
          <a-button style @click="prev" :disabled="current <= 0">Previous</a-button>
          <a-button
            style="margin-left: 12px;"
            type="primary"
            @click="next"
            :disabled="current === questions.length - 1"
          >Next</a-button>

          <a-button style="float: right" type="danger" :loading="loadingSubmit" @click="submit">Done</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import FlipCountdown from "vue2-flip-countdown";
import VueCountdown from "@chenfengyuan/vue-countdown";
import { BACKEND } from "../../constants";
import moment from "moment";
import Question from "../../components/Question.vue";
import eventbus from "../../eventbus";
export default {
  data() {
    return {
      started: false,
      current: 0,
      loading: false,
      loadingSubmit: false,
      exam: {
        subject: "",
        duration: null
      },
      subjects: {
        0: "english",
        1: "mathematics",
        2: "commerce",
        3: "accounting",
        4: "biology",
        5: "physics",
        6: "chemistry",
        7: "englishlit",
        8: "government",
        9: "crk",
        10: "geography",
        11: "economics",
        12: "irk",
        13: "civiledu",
        14: "insurance",
        15: "currentaffairs",
        16: "history"
      }
    };
  },
  components: {
    FlipCountdown,
    VueCountdown,
    Question
  },
  computed: {
    ...mapGetters({
      token: "getToken",
      user: "getUser",
      info: "getCBTInfo",
      currentTest: "getCurrentTest",
      questions: "getQuestions",
      responses: "responses"
    }),
    activeQuestion() {
      return this.questions[this.question];
    },
    newTime() {
      const duration = this.exam.duration;
      const end = moment()
        .add(duration, "minutes")
        .format("Y-MM-DD H:mm:ss");
      return end;
    },
    newTimeInt() {
      const tt = this.exam.duration;
      console.log(tt);
      return parseInt(tt) * 60 * 1000;
    }
  },
  methods: {
    ...mapActions(["setCBTInfo", "updateTestQuestions", "updateTestID"]),
    async proceed() {
      this.loading = true;
      try {
        const url = `${BACKEND}/student/cbt/load-questions`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        };
        const response = await axios.post(
          url,
          {
            subject: this.exam.subject,
            duration: this.exam.duration
          },
          config
        );

        const { questions } = response.data.data;
        const testID = response.data.data.test_id;

        await this.$store.dispatch("setCBTInfo", this.exam);
        await this.$store.dispatch("updateTestID", testID);
        await this.$store.dispatch("updateTestQuestions", questions);
        this.loading = false;
        this.started = true;
        eventbus.$emit("exam_started");
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
    timeUp() {
      console.log("Time Up");
      this.submit();
    },
    handleProgress(data) {
      console.log(`Progressing... ${data}`);
    },
    async submit() {
      const r = [];
      const userResponses = this.responses;
      console.log(userResponses);

      // eslint-disable-next-line arrow-parens
      userResponses.forEach((v, k) => {
        console.log(`KEY: ${k} => Val: ${v}`);
        const i = { id: k, response: v };
        r.push(i);
      });

      const payload = {
        test_id: this.currentTest,
        responses: r,
        duration: 10
      };
      this.loadingSubmit = true;
      try {
        const url = `${BACKEND}/student/cbt/submit-test`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        };
        const response = await axios.post(url, payload, config);
        this.$store.dispatch("updateFeedback", response.data.data);
        this.loadingSubmit = false;
        eventbus.$emit("exam_ended");
        this.$router.push("/dashboard/result");
      } catch (err) {
        console.log(err);
        this.loadingSubmit = false;
        let data = {
          type: "error",
          message:
            err.response.data.message || "An error occured. Please try again"
        };

        // sample error handlinig. check the app.vue file to see the alert function
        eventbus.$emit("show_alert", data);
      }
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    }
  }
};
</script>
<style scoped lang="scss">
.not-started {
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
  .bordered {
    border: 1px solid #eee;
    margin-top: 30px;
    background-color: #fff;
    width: 100%;
    padding: 20px;
  }
}
.steps-content {
  margin-top: 16px;
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  padding: 20px;
}

.steps-action {
  margin-top: 24px;
}
</style>
