<template>
  <div class="home">
    <h1>Hello Home {{ message }}</h1>
    <button @click="changeMessage">
      Click Me
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      message: 'Testing',
    };
  },
  methods: {
    changeMessage() {
      console.log(this.message);
    },
  },
};
</script>
