import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/search",
			name: "search",
			component: () =>
				import( /* webpackChunkName: "search" */ "./views/Search.vue")
		},
		{
			path: "/decide",
			name: "decide",
			component: () =>
				import( /* webpackChunkName: "decide" */ "./views/Decide.vue")
		},
		{
			path: "/pixel",
			name: "pixel",
			component: () =>
				import( /* webpackChunkName: "pixel" */ "./views/Pixel.vue")
		}
	]
});