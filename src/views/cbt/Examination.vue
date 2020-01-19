<template>
  <div id="examination">
    <v-container fluid grid-list-xl>
      <v-layout row align-content-space-between="">
        <v-flex d-flex lg6 md6 sm12 xs12>
          <h1>{{ info.subject}}</h1>
        </v-flex>
        <v-flex d-flex lg6 md6 sm12 xs12>
          <flip-countdown v-bind:deadline="newTime"></flip-countdown>
        </v-flex>
      </v-layout>

      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        class="elevation-2"
        dark
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab
        v-for="(i,n) in questions"
        :key="n.id"
        :href="`#tab-${n}`"
      >
        Question {{ n+1 }}
      </v-tab>

      <v-tab-item
        v-for="(n,i) in questions"
        :key="n.id"
        :value="'tab-' + i"
      >
      <Question v-bind:title=i+1 v-bind:data=questions[i] v-on:answered="manageScores" />
      </v-tab-item>
      </v-tabs>

      <!-- <Question /> -->
      <v-layout row wrap></v-layout>
      <v-layout row wrap>
        <v-flex d-flex lg6 md6 sm12 xs12 justify-center>
          <v-btn x-large color="info" dark>Previous Question</v-btn>
        </v-flex>
        <v-flex d-flex lg6 md6 sm12 xs12 justify-center>
          <v-btn append-icon="next" x-large color="info" dark>Next Question</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment';
import FlipCountdown from 'vue2-flip-countdown';
import Question from '@/components/Question.vue';
// import TextCard from '@/components/TextCard.vue';

export default {
  name: 'Examination',
  components: {
    Question,
    FlipCountdown,
  },
  data() {
    return {
      info: {
        subject: 'Literature-In-English',
        duration: 30,
      },
      tab: null,
      label: 'Question',
      responses: [],
      questions: [
        {
          id: 1,
          question: 'The play Hamlet may be described as a tragedy of:',
          option: {
            a: 'belief in ghosts ',
            b: 'marital infidelity',
            c: 'indecision and procrastination ',
            d: 'inordinate love of father by son',
          },
          section: 'question is on William Shakespeare\'s hamlet',
          image: '',
          answer: 'd',
          solution: '',
          examtype: 'post-utme',
          examyear: '2006',
        },
        {
          id: 38,
          question: 'The wood where Alec raped Tess is known as: ',
          option: {
            a: 'Chase borough',
            b: 'The Chase',
            c: 'Greenhill',
            d: 'Trantridge.',
          },
          section: '',
          image: '',
          answer: 'b',
          solution: '',
          examtype: 'post-utme',
          examyear: '2007',
        },
        {
          id: 46,
          question: 'The law protecting works of art from unlawful reproduction is called: ',
          option: {
            a: 'plagiarism ',
            b: 'illegal photocopying ',
            c: 'It is written mainly in prose',
            d: 'copyright.',
          },
          section: '',
          image: '',
          answer: 'd',
          solution: '',
          examtype: 'post-utme',
          examyear: '2007',
        },
      ],
    };
  },
  methods: {
    manageScores(questionID, response) {
      console.log(`Question iD: ${questionID}, Response is: ${response} `);
      this.responses[questionID] = response;
    },
  },
  computed: {
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
    console.log('I am well and alive');
  },
};
</script>
