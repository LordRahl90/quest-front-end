/* eslint-disable import/no-unresolved */
<template>
  <div id="exam-landing">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex d-flex lg6 md6 sm12 xs12>
          <Leaderboard />
        </v-flex>
        <v-flex d-flex lg6 md6 sm12 xs12>
          <v-card class="mt-12" width="100%">
            <v-card-title>Start Examination</v-card-title>
            <v-card-text>
              <div class="layout column align-left">
                <h3 class="flex my-4 black--text">Select Subject To Proceed</h3>
              </div>
              <v-form>
                <v-select
                  solo
                  append-icon="book"
                  label="Select Subject"
                  v-model="exam.subject"
                  :items="Object.values(subjects)"
                />
                <v-text-field
                  solo
                  append-icon="watch"
                  label="Duration"
                  v-model="exam.duration"
                />
                <v-btn color="blue" @click="proceed">Proceed</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import Leaderboard from '@/components/Leaderboard.vue';

import { BACKEND } from '../../constants';

export default {
  name: 'ExamLanding',
  components: {
    Leaderboard,
  },
  data() {
    return {
      exam: {
        subject: '',
        duration: 0,
      },
      subjects: {
        0: 'english',
        1: 'mathematics',
        2: 'commerce',
        3: 'accounting',
        4: 'biology',
        5: 'physics',
        6: 'chemistry',
        7: 'englishlit',
        8: 'government',
        9: 'crk',
        10: 'geography',
        11: 'economics',
        12: 'irk',
        13: 'civiledu',
        14: 'insurance',
        15: 'currentaffairs',
        16: 'history',
      },
    };
  },
  computed: {
    ...mapGetters({ token: 'getToken', user: 'getUser' }),
  },
  methods: {
    ...mapActions(['setCBTInfo', 'updateTestQuestions', 'updateTestID']),
    async proceed() {
      try {
        const url = `${BACKEND}/student/cbt/load-questions`;
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
        const response = await axios.post(
          url,
          {
            subject: this.exam.subject,
            duration: this.exam.duration,
          },
          config,
        );

        const { questions } = response.data.data;
        const testID = response.data.data.test_id;

        await this.$store.dispatch('setCBTInfo', this.exam);
        await this.$store.dispatch('updateTestID', testID);
        await this.$store.dispatch('updateTestQuestions', questions);
        this.$router.push({
          path: 'examination/proper',
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    if (this.token === '') {
      this.$router.push('/');
    }
  },
};
</script>
