import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		firstName: '',
		lastName: '',
		faction: '',
		race: '',
		class: ''
	},
	mutations: {},
	actions: {}
});