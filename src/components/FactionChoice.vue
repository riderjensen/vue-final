<template>
      <v-card class="margin" style="padding-bottom: 20px;">
        <v-card-title primary-title>
          <slot></slot>
        </v-card-title>
		<v-btn v-on:click="$emit('factionChoice', msg)">Choose</v-btn>
      </v-card>
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
h1 {
  text-align: center;
}
</style>
