<template>
  <div class="home">
    <v-parallax src="http://i.imgur.com/glh4rkd.jpg">
      <div class="our-dev">
        <h1 style="text-align: center;">World of Warcraft: Classic</h1>
        <p>World of Warcraft: Classic (shortened as Classic) is a new server option for World of Warcraft announced at BlizzCon 2017. The goal of Classic is to let players experience World of Warcraft as close as possible to what it was before The Burning Crusade. It was announced at BlizzCon 2018 that Classic is slated for release in summer of 2019.</p>
      </div>
    </v-parallax>
    <br>
    <br>
    <h2>Development</h2>
    <div class="our-dev2">
      <p>Before work began on World of Warcraft: Classic, it was only possible for players to experience the original World of Warcraft by using private servers, which are illegal, often have stability or corruption problems, and generally are very imperfect recreations of the authentic World of Warcraft experience. As much as Blizzard has been aware of the desires of their community, until recently it seemed impossible for them to emulate Classic servers due to the technical hurdles of essentially having to run two massively multiplayer online games side-by-side. A breakthrough was then achieved that made it possible to run Classic servers on the modern architecture of current World of Warcraft servers.
        <br>Even though a modern server architecture is used, Classic servers won't have the same features that current World of Warcraft does. There won't be cross-realm servers or Looking For Raid and Dungeon Finder automatic party matchmaking. There are still a lot of questions about how the team will tackle it. This endeavor is being undertaken by an entirely separate team at Blizzard from the one working on World of Warcraft and its next expansion.
        <br>In June 2018, the team settled on using patch 1.12 as a foundation for Classic. They managed to have a locally rebuilt version of patch 1.12 running internally, using modern code and data architecture.
        <br>A demo of the game was available at BlizzCon 2018, and was downloadable on home computers for anyone who purchased a BlizzCon ticket or virtual ticket. The servers became available when Opening Ceremony started at BlizzCon 2018 and was set to end on November 8, but was extended until November 12. Players started at level 15, and the only available zones were Westfall and the Barrens. It was based on patch 1.13.0, essentially patch 1.12.0 ported to a modern infrastructure. The first day of the demo, there was a playtime limit of a cumulative 60 minutes with a cooldown of 90 minutes, applied through the BlizzCon Exhaustion debuff. The debuff was removed on the second day of BlizzCon 2018.
      </p>
    </div>
    <br>
    <br>
    <v-flex xs12 sm4 offset-sm4>
      <v-card>
        <v-card-title primary-title>
          <div style="margin:auto">
            <h3 class="headline mb-0">Your chosen information:</h3>
            <h3 class="mb-0">Name: {{ ourName }}</h3>
            <h3 class="mb-0">Faction: {{ ourFaction }}</h3>
            <h3 class="mb-0">Race: {{ ourRace }}</h3>
            <h3 class="mb-0">Class: {{ ourClass }}</h3>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="info" to="/search">Pick a name</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="info" to="/decide">Pick a faction, race, and class</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="error" @click="resetStore">Reset</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  computed: {
    ourName() {
      return (
        this.$store.getters.getFirstName + " " + this.$store.getters.getLastName
      );
    },
    ourFaction() {
      return this.$store.getters.getFaction;
    },
    ourRace() {
      return this.$store.getters.getRace;
    },
    ourClass() {
      return this.$store.getters.getClass;
    }
  },
  methods: {
    resetStore() {
      this.$store.dispatch("addFaction", "");
      this.$store.dispatch("addRace", "");
      this.$store.dispatch("addClass", "");
      this.$store.dispatch("addFirstName", "");
      this.$store.dispatch("addLastName", "");
    }
  }
};
</script>

<style scoped>
.our-dev {
  background-color: #666;
  margin: auto;
  max-width: 700px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
.our-dev2 {
  margin: auto;
  max-width: 1000px;
  text-align: left;
}
v-parallax {
  height: 100%;
}
</style>

