<template>
  <div class="about">
	<h2>Your charecter</h2>
	<p>{{ userFaction }} {{ userRace }} {{ userClass }}</p>
	<v-btn @click="restart">Restart</v-btn>
	<v-layout v-if="!userFaction" v-for="item in information" :key="item.faction">
		<FactionChoice  v-bind:msg="item.name" v-on:factionChoice="addFaction">
			<h1>{{ item.name }}</h1>
			<p>{{ item.quickInfo}}</p>
		</FactionChoice>
	</v-layout>

	<v-layout v-if="factionChosen" v-for="item in information[userFactionID].races" :key="item.races">
		<RaceChoice  v-bind:msg="item.race" v-on:raceChoice="addRace">
			<h1>{{ item.race }}</h1>
			<p>{{ item.shortDesc}}</p>
		</RaceChoice>
	</v-layout>

	<v-layout v-if="classChosen" v-for="(item, i) in information[userFactionID].races[userRaceID].classes">
		<ClassChoice  v-bind:msg="item" v-on:classChoice="addClass">
			<h1>{{ item }}</h1>
		</ClassChoice>
	</v-layout>
  </div>

</template>

<script>
import FactionChoice from "@/components/FactionChoice.vue";
import RaceChoice from "@/components/RaceChoice.vue";
import ClassChoice from "@/components/ClassChoice.vue";

import { info } from "../assets/wowinfo";

export default {
  data: () => {
    return {
      information: info,
      userFaction: "",
      userFactionID: 0,
      factionChosen: false,
      classChosen: false,
      userRaceID: 0,
      userRace: "",
      userClass: ""
    };
  },
  components: {
    FactionChoice,
    RaceChoice,
    ClassChoice
  },
  methods: {
    addFaction(faction) {
      if (faction == "alliance") {
        this.userFactionID = 0;
      } else {
        this.userFactionID = 1;
      }
      this.userFaction = faction;
      this.factionChosen = true;
    },
    addRace(race) {
      switch (race) {
        case "human":
          this.userRaceID = 0;
          break;
        case "dwarf":
          this.userRaceID = 1;
          break;
        case "night-elf":
          this.userRaceID = 2;
          break;
        case "gnome":
          this.userRaceID = 3;
          break;
        case "orc":
          this.userRaceID = 0;
          break;
        case "forsaken":
          this.userRaceID = 1;
          break;
        case "tauren":
          this.userRaceID = 2;
          break;
        case "troll":
          this.userRaceID = 3;
          break;
      }
      this.userRace = race;
      this.factionChosen = false;
      this.classChosen = true;
    },
    addClass(useClass) {
      console.log(useClass);
      this.userClass = useClass;
      this.classChosen = false;
    },
    restart() {
      this.userFaction = "";
      this.userRace = "";
      this.userClass = "";
      this.factionChosen = false;
      this.classChosen = false;
    }
  }
};
</script>

<style scoped>
</style>
