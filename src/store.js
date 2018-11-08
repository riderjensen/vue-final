import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		firstName: 'Unchosen',
		lastName: '',
		faction: 'Unchosen',
		race: 'Unchosen',
		class: 'Unchosen'
	},
	mutations: {},
	actions: {}
});