<template>
  <div class="about">
    <h1>This is a decider to help you choose a vanilla class</h1>
	  <v-layout>
	<FactionChoice msg="alliance" v-on:factionChoice="addFaction">
		<h1>Alliance</h1>
		<p>Information about the alliance here</p>
	</FactionChoice>
	<FactionChoice msg="horde" v-on:factionChoice="addFaction">
		<h1>Horde</h1>
		<p>Information about the horde here</p>
	</FactionChoice>
	</v-layout>
  </div>
</template>

<script>
import FactionChoice from "@/components/FactionChoice.vue";

export default {
  data: () => {
    return {
      userFaction: "",
      userRace: "",
      userClass: ""
    };
  },
  components: {
    FactionChoice
  },
  methods: {
    addFaction(faction) {
      this.userFaction = faction;
    }
  }
};
</script>

<style scoped>
</style>
