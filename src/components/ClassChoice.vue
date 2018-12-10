<template>
  <v-card class="margin" style="padding-bottom: 20px; height: 93%">
    <v-card-title primary-title>
      <slot></slot>
    </v-card-title>
    <p style="text-align: center;" class="class-button">
      <v-btn v-on:click="$emit('classChoice', msg)">Choose</v-btn>
    </p>
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
  padding-bottom: 30px;
}
.factionInt {
  font-size: 40px;
}
.class-button {
  position: absolute;
  bottom: 10px;
  width: 100%;
}
</style>
