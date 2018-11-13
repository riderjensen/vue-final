<template>

<!-- 
1. Effectively use conditional logic and JavaScript array methods to render large lists.
See Decide.vue

2. Encapsulate your code as VueJS single-file components.
See components folder

3. Work with the Vue-CLI to create and manage your project within a real development toolset.
See package.json for confirmation of vue-cli

4. Properly use Git for your source version control with an established record of at least 4 days of commits each week from October 15th through December 6th.
See https://github.com/riderjensen

5. Allow communication between components using props, custom events, or local store.
See Decide.vue

6. Present a form for user input that provides useful form validation and feedback.
See Search.vue

7. Create a custom directive and use it on at least one of your components.
See NameCard.vue

8. Use a mix of animations and transitions to enhance some aspects of your project.
See Decide.vue and Search.vue

9. Connect to a server using HTTP and display retrieved data (use vue-resource or Axios).
See Search.vue

10. Provide at least 3 different routes with navigation between them using vue-router.
See router.js

11. Manage your application's state using vuex.
See store.js

12. Structure, document, and deploy your final project code according to common industry practices. 
See my project

-->


 <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
	  clipped
    >
      <v-list dense>
		<router-link to="/">
        	<v-list-tile>
          		<v-list-tile-content>
            		<v-list-tile-title>Home</v-list-tile-title>
          		</v-list-tile-content>
        	</v-list-tile>
		</router-link>
		<router-link to="/search">
        	<v-list-tile>
          		<v-list-tile-content>
            		<v-list-tile-title>Generate a Character Name</v-list-tile-title>
          		</v-list-tile-content>
        	</v-list-tile>
		</router-link>		
		<router-link to="/decide">
        	<v-list-tile>
          		<v-list-tile-content>
            		<v-list-tile-title>Vanilla Class Chooser</v-list-tile-title>
          		</v-list-tile-content>
        	</v-list-tile>
		</router-link>
		<router-link to="/pixel">
        	<v-list-tile>
          		<v-list-tile-content>
            		<v-list-tile-title>Create an Icon</v-list-tile-title>
          		</v-list-tile-content>
        	</v-list-tile>
		</router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          
        >
          <v-flex text-xs-center>
			  <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    route(page) {
      this.$router.push("/search");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* line-height: 1.4; */
}

a {
  font-weight: bold;
  color: #3f51b5;
}

a.router-link-exact-active {
  color: #3f51b5;
}
a.router-link-exact-active div {
  background-color: #f5f5f5;
}
</style>
