<template>
  <h3>{{ counter }}</h3>
  <p>do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //   return this.$store.state.counter;
      return this.$store.getters['counter/normalizedCounter'];
    }
  }
};
</script>
