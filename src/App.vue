<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
        sub-group
        no-action
        value="false"
        >
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <v-icon>devices</v-icon>
          </v-list-tile-action>
            <v-list-tile-title>My Technology</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="(tech, i) in technology"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="tech.name"></v-list-tile-title>
            <v-list-tile-action>
              <i :class='tech.image'></i>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Work</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>alternate_email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Learn More</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    technology: [{
      name: "HTML",
      image: "devicon-html5-plain",
      description: "",
      card: [

      ]
    }, {
      name: "CSS",
      image: "devicon-css3-plain",
      description: "",
      card: [

      ]
    }, {
      name: "JavaScript",
      image: "devicon-javascript-plain",
      description: "",
      card: [

      ]
    }, {
      name: "Vue.js",
      image: "devicon-vuejs-plain",
      description: "",
      card: [

      ]
    }, {
      name: "Node.js",
      image: "devicon-nodejs-plain",
      description: "",
      card: [

      ]
    }, {
      name: "Express",
      image: "devicon-express-original",
      description: "",
      card: [

      ]
    }]
  })
}
</script>

<style>

</style>
