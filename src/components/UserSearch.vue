<template>
  <form>
    <v-text-field
      v-model="maxNum"
      :error-messages="nameErrors"
      :counter="3"
      label="Number of names generated (max 500)"
      @input="$v.maxNum.$touch()"
      @blur="$v.maxNum.$touch()"
    ></v-text-field>
    <v-btn v-on:click="$emit('userSubmit', maxNum)">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    maxNum: { required, maxLength: maxLength(3) }
  },

  data: () => {
    return {
      maxNum: 10
    };
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.maxNum.$dirty) return errors;
      !this.$v.maxNum.maxLength &&
        errors.push("No more than 500 names can be called");
      parseInt(this.maxNum) > 500 &&
        errors.push("No more than 500 names can be called");
      parseInt(this.maxNum) < 1 &&
        errors.push("Please enter a number higher than 0");
      return errors;
    }
  },
  methods: {
    clear() {
      this.$v.$reset();
      this.name = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
