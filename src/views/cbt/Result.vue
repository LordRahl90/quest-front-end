/* eslint-disable vue/max-attributes-per-line */
<template>
  <div id="exam-result">
    <v-container fluid grid-list-xl>
      <v-layout row align-content-space-between>
        <v-flex d-flex lg6 md6 sm12 xs12>
          <h1>{{ info.subject }}</h1>
        </v-flex>
        <v-flex d-flex lg6 md6 sm12 xs12>Time Spent:</v-flex>
      </v-layout>

      <v-layout row justify-center>
        <v-flex lg6 md6 sm12 xs12>
          <h1>Leaderboard is Here oooo...</h1>
        </v-flex>
        <v-flex lg6 md6 sm12 xs12>
          <v-simple-table width="100%">
            <thead>
              <tr>
                <th colspan="2" class="text-left">Quest Tutorials, Test Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fullname:</td>
                <td>{{ user.full_name }}</td>
              </tr>
              <tr>
                <td>Subject:</td>
                <td>{{ info.subject }}</td>
              </tr>
              <tr>
                <td>Time Spent:</td>
                <td>6:30</td>
              </tr>
              <tr>
                <td>Number of Questions:</td>
                <td>{{ feedback.total }}</td>
              </tr>
              <tr>
                <td>Pass Rate:</td>
                <td>{{ feedback.percentage }}%</td>
              </tr>
              <tr>
                <td>Failed Rate:</td>
                <td>{{ 100-feedback.percentage }}%</td>
              </tr>
              <tr>
                <td>Previous Rank:</td>
                <td>120th</td>
              </tr>
              <tr>
                <td>New Rank:</td>
                <td>121st</td>
              </tr>
              <tr>
                <td colspan="2" align="center">
                  <v-btn class="info">Print Result</v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ExamResult',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      token: 'getToken',
      feedback: 'getFeedback',
      user: 'getUser',
      info: 'getCBTInfo',
    }),
  },
  methods: {},
};
</script>
