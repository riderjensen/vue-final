<template>
  <div class="about">
    <UserSearch msg="Welcome to your Vue App!"/>
  </div>
</template>

<script>
import UserSearch from "@/components/UserSearch.vue";

export default {
  name: "home",
  components: {
    UserSearch
  }
};
</script>

<style scoped>
</style>
