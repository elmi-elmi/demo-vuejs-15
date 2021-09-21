<template>
  <button v-if="!isAuth" @click="login">
    log in
  </button>
  <button v-else @click="logout">log out</button>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.userAuthenticated;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>
