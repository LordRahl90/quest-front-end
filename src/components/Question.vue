<template>
  <div id="question" class="mx-auto">
    <TextCard v-bind:title=qTitle v-bind:content=data.question />
    <TextCard title="Passage:" v-bind:content=data.section v-if="data.section!=''" class="mt-5" />
    <v-flex d-flex lg6 md6 sm12 xs12 class="mx-3" >
      <v-radio-group v-model="response">
        <v-radio
          v-for="(opt,index) in data.option"
          :key="index"
          :label="`${index}) ${opt}`"
          :value="index"
          @click="updateAnswer(data.id,index)"
        ></v-radio>
      </v-radio-group>
      <!-- <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="`Radio ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group> -->
    </v-flex>
  </div>
</template>
<script>
import TextCard from '@/components/TextCard.vue';

export default {
  name: 'Question',
  components: {
    TextCard,
  },
  props: {
    data: Object,
    title: Number,
  },
  data() {
    return {
      response: '',
    };
  },
  methods: {
    updateAnswer(questionID, response) {
      console.log(questionID, response);
      this.response = response;
      this.$emit('answered', questionID, response);
    },
  },
  computed: {
    qTitle() {
      return `Question ${this.title}`;
    },
  },
};
</script>
