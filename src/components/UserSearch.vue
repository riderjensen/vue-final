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
	<transition name="highlight-clock" appear>
    <v-btn v-on:click="$emit('userSubmit', maxNum)">submit</v-btn>
	</transition>
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
      !parseInt(this.maxNum) && errors.push("Please enter a number");

      parseInt(this.maxNum) < 1 &&
        errors.push("Please enter a number higher than 0");
      parseInt(this.maxNum) > 500 &&
        errors.push("No more than 500 names can be called");
      !this.$v.maxNum.maxLength &&
        errors.push("No more than 500 names can be called");
      return errors;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
