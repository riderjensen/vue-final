<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
	<realmSearch/>
    <v-btn v-on:click="$emit('userSubmit', name)">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import realmSearch from "@/components/RealmSearch.vue";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) }
  },

  data: () => ({
    name: ""
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    }
  },
  components: {
    realmSearch
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
