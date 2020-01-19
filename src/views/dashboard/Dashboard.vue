<template>
    <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="domain" title="1,287,687"
        subTitle= '13% higher yesterday' supTitle="Today's Visits" color="#00b297"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="money_off" title="$141,291"
        subTitle= '$117,212 before tax' supTitle="Today's Sales" color="#dc3545"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="computer" title="33.45%"
        subTitle= '13% average duration' supTitle="% Unique Visits" color="#0866C6"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="watch_later" title="13.00%"
        subTitle= '17.25% on average time' supTitle="Bounce Rate" color="#1D2939"/>
      </v-flex>
      <!-- Widgets Ends -->

      <v-flex d-flex lg6 sm6 xs12>
        <h1>Leader Board</h1>
      </v-flex>

      <v-flex d-flex lg6 sm6 xs12>
        <h1>Last 10 Test Scores</h1>
      </v-flex>

      <v-flex d-flex lg6 sm6 xs12>
        <h1>Subject List</h1>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import Widget from '@/components/Widget.vue';

export default {
  name: 'Dashboard',
  components: {
    Widget,
  },
};
</script>
