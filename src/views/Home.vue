<template>
  <div class="home">
    <h1>World of Warcraft: Classic</h1>
	<p>WOW: Classic is the original World of Warcraft, right up until just before the launch of the Burning Crusade expansion. Also called "Vanilla", Blizzard Entertainment has announced plans to open at least one server for those interested in going back and experiencing days of yore</p>
	<h3>Speculative count down clock</h3>
	<h3 id="clock"></h3>
	<br>
	<br>
   <v-flex xs12 sm4 offset-sm4>
      <v-card>

        <v-card-title primary-title>
          <div style="margin:auto">
			<h3 class="headline mb-0">Your chosen information:</h3>
            <h3 class="mb-0">Name: {{ ourName }} </h3>
			<h3 class="mb-0">Faction: {{ ourFaction }}</h3>
			<h3 class="mb-0">Race: {{ ourRace }}</h3>
			<h3 class="mb-0">Class: {{ ourClass }}</h3>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" @click="resetStore">Reset</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

  </div>
</template>

<script>
export default {
  computed: {
    ourName() {
      return this.$store.getters.getFirstName + " " + this.$store.getters.getLastName;
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
	this.$store.dispatch('addFaction', '');
	  this.$store.dispatch('addRace', '');
	  this.$store.dispatch('addClass', '');
	  this.$store.dispatch('addFirstName', '');
	  this.$store.dispatch('addLastName', '');
    }
  }
};
if(document.getElementById("clock")){
	let countDownDate = new Date("June 9, 2019 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("clock").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);
}


</script>

<style scoped>
</style>

