<template>
  <div id="text-card">
    <v-card max-width="100%">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
      <v-card-text>{{ content }}</v-card-text>
      <v-card-actions>{{ footer }}</v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'TextCard',
  props: {
    title: String,
    subtitle: String,
    content: String,
    footer: String,
  },
  data() {
    return {};
  },
};
</script>
