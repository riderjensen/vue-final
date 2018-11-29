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
	getters:{
		getFirstName: state => {
			return state.firstName
		},
		getLastName: state => {
			return state.lastName
		},
		getFaction: state => {
			return state.faction
		},
		getRace: state => {
			return state.race
		},
		getClass: state => {
			return state.class
		}
	},
	mutations: {
		addFirstName(state, x){
			state.firstName = x
		},
		addLastName(state, x){
			state.lastName = x
		},
		addFaction(state, x){
			state.faction = x
		},
		addRace(state, x){
			state.race = x
		},
		addClass(state, x){
			state.class = x
		}
	},
	actions: {
		addFirstName({commit}, payload){
			commit('addFirstName', payload)
		},
		addLastName({commit}, payload){
			commit('addLastName', payload)
		},
		addFaction({commit}, payload){
			commit('addFaction', payload)
		},
		addRace({commit}, payload){
			commit('addRace', payload)
		},
		addClass({commit}, payload){
			commit('addClass', payload)
		},
	}
});