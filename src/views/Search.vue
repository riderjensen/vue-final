<template>
  <div>
    <UserSearch v-on:userSubmit="searchUser"/>
  </div>
</template>

<script>
import UserSearch from "@/components/UserSearch.vue";

export default {
  name: "home",
  components: {
    UserSearch
  },
  data: {
    return: {
      userName: "",
      realm: ""
    }
  },
  methods: {
    searchUser(userName) {
      // we connect to blix api to find names
      console.log(userName);
    }
  }
};
</script>

<style scoped>
</style>
