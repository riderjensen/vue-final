<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app clipped>
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
    <v-toolbar color="red" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>WOW Classic Helper</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container style="padding: 0; padding-bottom: 20px" fluid fill-height>
        <v-layout justify-center>
          <v-flex text-xs-center>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="red" absolute="true" app>
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
