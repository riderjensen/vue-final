<template>


      <v-card class="margin">
        <v-card-title primary-title>
          <slot></slot>
        </v-card-title>
		<v-btn v-on:click="$emit('classChoice', msg)">Choose</v-btn>
      </v-card>

  
</template>

<script>
export default {
  name: "NameCard",
  props: {
    msg: Object
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
