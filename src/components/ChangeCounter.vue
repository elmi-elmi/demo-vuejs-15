<template>
  <button @click="addOne">add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.state.counter = this.$store.state.counter + 1;
      //   this.$store.commit('increment');
      this.$store.dispatch('increment');
    }
  }
};
</script>
