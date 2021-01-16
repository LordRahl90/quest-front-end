/* eslint-disable max-len */
<template>
  <div id="examination">
    <v-container fluid grid-list-xl>
      <v-layout row align-content-space-between>
        <v-flex d-flex lg6 md6 sm12 xs12>
          <h1>{{ info.subject }}</h1>
        </v-flex>
        <v-flex d-flex lg6 md6 sm12 xs12>
          <flip-countdown :deadline="newTime" />
        </v-flex>
      </v-layout>

      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        class="elevation-2"
        dark
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
        vertical
      >
        <v-tabs-slider />
        <v-tab v-for="(i, n) in questions" :key="n.id" :href="`#tab-${n}`"
          >No. {{ n + 1 }}</v-tab
        >
        <v-tab-item v-for="(n, i) in questions" :key="n.id" :value="'tab-' + i">
          <Question
            :title="i + 1"
            v-bind:data="questions[i]"
            @answered="manageScores"
          />
        </v-tab-item>
      </v-tabs>

      <!-- <Question /> -->
      <v-layout row wrap>
        <v-flex d-flex lg6 md6 sm12 xs12 justify-center>
          <v-btn @click="prev" x-large color="info" dark
            >Previous Question</v-btn
          >
        </v-flex>
        <v-flex d-flex lg6 md6 sm12 xs12 justify-center>
          <v-btn @click="next" append-icon="next" x-large color="info" dark
            >Next Question</v-btn
          >
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex d-flex lg6 md12 sm12 xs12 justify-center>
          <v-btn @click="submit" x-large color="error" dark
            >Complete Test</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import FlipCountdown from 'vue2-flip-countdown';
import Question from '@/components/Question.vue';
import { BACKEND } from '../../constants';
// import TextCard from '@/components/TextCard.vue';

export default {
  name: 'Examination',
  components: {
    Question,
    FlipCountdown,
  },
  data() {
    return {
      tab: null,
      monitor: null,
      label: 'Question',
    };
  },
  computed: {
    ...mapGetters({
      info: 'getCBTInfo',
      token: 'getToken',
      user: 'getUser',
      currentTest: 'getCurrentTest',
      questions: 'getQuestions',
      responses: 'responses',
    }),
    tabs() {
      return this.questions.length;
    },
    newTime() {
      const { duration } = this.info;
      const end = moment().add(duration, 'minutes').format('Y-MM-DD H:mm:ss');
      return end;
    },
  },
  mounted() {
    const { subject, duration } = this.info;
    if ((subject === '' && duration === 0) || this.token === '') {
      this.$router.go(-1);
    }
    // this.monitor = setInterval(this.sendPing, 60000);
  },
  methods: {
    ...mapActions(['updateResponse']),
    manageScores(questionID, response) {
      const res = { questionID, response };
      this.$store.dispatch('updateResponse', res);
    },
    prev() {
      const tabID = this.tab.slice(4, this.tab.length);
      if (tabID > 0) {
        const prevTab = `tab-${tabID - 1}`;
        this.tab = prevTab;
      }
    },
    next() {
      const tabID = this.tab.slice(4, this.tab.length);
      if (tabID < this.questions.length - 1) {
        const nextTab = `tab-${parseInt(tabID, 32) + 1}`;
        this.tab = nextTab;
      }
    },
    sendPing() {
      console.log('Sending PING to Server');
    },
    async submit() {
      const r = [];
      const userResponses = this.responses;

      // eslint-disable-next-line arrow-parens
      userResponses.forEach((v, k) => {
        console.log(`KEY: ${k} => Val: ${v}`);
        const i = { id: k, response: v };
        r.push(i);
      });

      const payload = {
        test_id: this.currentTest,
        responses: r,
        duration: 10,
      };

      try {
        const url = `${BACKEND}/student/cbt/submit-test`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
        const response = await axios.post(url, payload, config);
        this.$store.dispatch('updateFeedback', response.data.data);
        this.$router.push('/examination/result');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
