<template>

    <v-flex xs12 sm6 offset-sm3>
      <v-card class="margin">
        <v-card-title primary-title>
          <slot></slot>
        </v-card-title>
		<v-btn v-on:click="$emit('raceChoice', msg)">Choose</v-btn>
      </v-card>
    </v-flex>
  
</template>

<script>
export default {
  name: "NameCard",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin {
  margin: 20px;
}
.factionInt {
  font-size: 40px;
}
</style>
