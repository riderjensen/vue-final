<template>
  <div><h1>Generate a character name</h1>
  <h3 v-if="showName">Your Chosen Name: {{ firstNombre }} {{ lastNomber }}</h3>
    <UserSearch v-on:userSubmit="searchUser"/>
	<div v-for="(item, i) in nameArray" :key="i">
		<transition name="highlight-clock" appear>
	<NameCard v-bind:gender="item.gender">
		<h2>{{ item.name }} {{ item.surname }}</h2>
		<v-spacer></v-spacer>
		<v-btn color="info" @click="addName(item.name, item.surname)">Select</v-btn>
	</NameCard>
		</transition>
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
      nameArray: [],
      showName: false,
      firstNombre: "",
      lastNomber: ""
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
    },
    addName(name, surname) {
      this.firstNombre = name;
      this.lastNomber = surname;
      this.$store.state.firstName = name;
      this.$store.state.lastName = surname;
      this.showName = true;
    }
  }
};
</script>

<style scoped>
.highlight-clock-enter {
  opacity: 0;
}
.highlight-clock-enter-active {
  transition: opacity 3s;
  animation: move-in 1s ease-out forwards;
}
@keyframes move-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
