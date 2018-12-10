<template>
  <div class="about">
    <h2 v-if="finished">Your character</h2>
    <v-btn v-if="finished" @click="restart">Restart</v-btn>
    <v-btn v-if="finished" @click="home">Home</v-btn>
    <h2 v-if="!userFaction">Choose Your Faction</h2>
    <h2 v-if="factionChosen">Choose Your Race</h2>
    <h2 v-if="classChosen">Choose Your Class</h2>

    <v-layout row wrap v-if="!userFaction">
      <v-flex xs12 v-for="item in information" :key="item.faction">
        <transition name="highlight-clock" appear>
          <FactionChoice v-bind:msg="item.name" v-on:factionChoice="addFaction">
            <h1>{{ item.name | toUppercase }}</h1>
            <img :src="ourString + item.name + secString">
            <p>{{ item.quickInfo}}</p>
          </FactionChoice>
        </transition>
      </v-flex>
    </v-layout>

    <v-layout
      v-if="factionChosen"
      xs12
      sm6
      v-for="item in information[userFactionID].races"
      :key="item.races"
    >
      <v-flex>
        <transition name="highlight-clock" appear>
          <RaceChoice v-bind:msg="item.race" v-on:raceChoice="addRace">
            <h1>{{ item.race | toUppercase }}</h1>
            <img :src="ourString + item.race + secString">
            <p>{{ item.shortDesc}}</p>
          </RaceChoice>
        </transition>
      </v-flex>
    </v-layout>

    <v-layout v-if="classChosen" row wrap>
      <v-flex
        xs12
        sm6
        v-for="item in information[userFactionID].races[userRaceID].classes"
        :key="item.classes"
      >
        <transition name="highlight-clock" appear>
          <ClassChoice v-bind:msg="item" v-on:classChoice="addClass">
            <h1>{{ item.name | toUppercase }}</h1>
            <img :src="ourString + item.name + pngString">
            <p style="margin-bottom: 70px;">{{ item.desc}}</p>
          </ClassChoice>
        </transition>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout v-if="finished" row wrap>
        <v-flex xs12 sm4>
          <div class="cont-pad">
            <img :src="ourString + userFaction + secString">
            <h4>{{ userFaction | toUppercase }}</h4>
          </div>
        </v-flex>
        <v-flex xs12 sm4>
          <div class="cont-pad">
            <img :src="ourString + userRace + secString">
            <h4>{{ userRace | toUppercase }}</h4>
          </div>
        </v-flex>
        <v-flex xs12 sm4>
          <div class="cont-pad">
            <img :src="ourString + userClass + pngString">
            <h4>{{ userClass | toUppercase }}</h4>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
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
      finished: false,
      userRaceID: 0,
      userRace: "",
      userClass: "",
      ourString: "../",
      secString: ".jpg",
      pngString: ".png"
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
      window.scrollTo(0, 0);
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
      window.scrollTo(0, 0);
    },
    addClass(useClass) {
      this.userClass = useClass.name;
      this.classChosen = false;
      this.$store.dispatch("addFaction", this.userFaction);
      this.$store.dispatch("addRace", this.userRace);
      this.$store.dispatch("addClass", this.userClass);
      this.finished = true;
      window.scrollTo(0, 0);
    },
    restart() {
      this.userFaction = "";
      this.userRace = "";
      this.userClass = "";
      this.factionChosen = false;
      this.classChosen = false;
      this.finished = false;
    },
    home() {
      this.$router.push({ name: "home" });
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}
p {
  padding: 20px;
}
img {
  max-width: 200px;
  margin: auto;
}
.cont-pad img {
  padding: 20px;
}

.highlight-clock-enter {
  opacity: 0;
}
.highlight-clock-enter-active {
  transition: opacity 3s;
  animation: move-in 1s ease-out forwards;
}
@keyframes move-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
