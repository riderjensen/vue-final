<template>
  <div><h1>Generate a character name</h1>
    <UserSearch v-on:userSubmit="searchUser"/>
	<div v-for="item in nameArray" :key="item">
	<NameCard v-bind:gender="item.gender">
		<h2>{{ item.name }} {{ item.surname }}</h2>
		<v-spacer></v-spacer>
		<h4>Country - {{ item.region }}</h4>
	</NameCard>
	</div>
  </div>
</template>

<script>
import UserSearch from "@/components/UserSearch.vue";
import NameCard from "@/components/NameCard.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    UserSearch,
    NameCard
  },
  data: () => {
    return {
      queryString: "?amount=",
      queryAmount: "1",
      nameArray: []
    };
  },
  methods: {
    searchUser(maxNum) {
      this.queryAmount = maxNum;
      this.nameArray = [];
      axios
        .get(
          `http://uinames.com/api/${this.queryString}${this.queryAmount}`,
          {}
        )
        .then(response => {
          this.nameArray = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
