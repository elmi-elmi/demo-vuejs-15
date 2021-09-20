<template>
  <!-- <button @click="increment">add 1</button>
  <button @click="increase({ value: 11 })">add 11</button>  -->
  <button @click="incr">add 1</button>
  <button @click="incs({ value: 11 })">add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.state.counter = this.$store.state.counter + 1;
    //   this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increase', 'increment']);
    ...mapActions({
      incr: 'increment',
      incs: 'increase'
    })
  }
};
</script>
