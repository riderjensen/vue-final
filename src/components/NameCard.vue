<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-ourGender="gender" class="margin">
        <v-card-title primary-title>
          <slot></slot>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "NameCard",
  props: {
    gender: String
  },
  directives: {
    ourGender: {
      bind(el, binding, vnode) {
        if (binding.value == "male") {
          el.style.backgroundColor = "lightBlue";
        } else {
          el.style.backgroundColor = "pink";
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin {
  margin-bottom: 20px;
}
</style>
