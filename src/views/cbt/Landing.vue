<template>
  <div id="exam-landing">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
      <v-flex d-flex lg6 md6 sm12 xs12>
        <Leaderboard />
      </v-flex>
      <v-flex d-flex lg6 md6 sm12 xs12>
        <v-card class="mt-12"  width="100%">
          <v-card-title>Start Examination</v-card-title>
          <v-card-text>
                <div class="layout column align-left">
                  <h3 class="flex my-4 black--text">Select Subject To Proceed</h3>
                </div>
                <v-form>
                  <v-select solo
                  append-icon="book"
                  label="Select Subject"
                   />

                  <v-text-field solo
                  append-icon="watch"
                  label="Duration" />

                  <v-btn color="blue">Proceed</v-btn>
                </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
import Leaderboard from '@/components/Leaderboard.vue';

export default {
  name: 'ExamLanding',
  components: {
    Leaderboard,
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>
