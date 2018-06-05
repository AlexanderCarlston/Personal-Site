<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="hideDrawer" :to='{name: "LandingPage"}'>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="hideDrawer" :to='{name: "AboutMe"}' >
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
            @click="changeCurrentTech"
            :to='{name: "Loading"}'
          >
            <v-list-tile-title v-text="tech.name"></v-list-tile-title>
            <v-list-tile-action>
              <i :class='tech.image'></i>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile :to='{name: "MyWork"}' @click="hideDrawer">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Work</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to='{name: "ContactMe"}' @click="hideDrawer">
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
    <v-content class="">
      <canvas id="backgroundCanvas"></canvas>
      <canvas id="clickCanvas"></canvas>
      <v-container>
        <v-layout>
          <router-view :loadTechnology="technology" :CurrentTechObject="CurrentTechObject"></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    hideDrawer() {
      this.drawer = false
      return Promise.resolve(this)
    },
    changeText() {
      var CurrentTechName = event.target.innerText.trim()
      this.CurrentTechName = CurrentTechName
      return Promise.resolve(this)
    },
    changeTechObject(){
      let matchedNav = this.technology.filter(tech => tech.name === this.CurrentTechName)[0]
      if (matchedNav) {
        this.CurrentTechObject = matchedNav
      } else {
        console.warn('WTF?!?!', matchedNav, 'this.technology.length=', this.technology.length, 'this.CurrentTechName=', this.CurrentTechName)
      }
      return Promise.resolve(this)
    },
    changeTechRoute(){
      this.$router.push('CurrentTech')
      return Promise.resolve(this)
    },
    changeCurrentTech() {
      return Promise.resolve()
        .then(this.changeText)
        .then(this.changeTechObject)
        .then(this.hideDrawer)
        .then(this.changeTechRoute)
    },
  },
  mounted(){
    fetch("../static/technology.json")
    .then(response => response.json())
    .then(response => this.technology = response)
  },
  data: () => ({
    drawer: false,
    technology: [],
    CurrentTechName: "test",
    CurrentTechObject: {}
  })
}
</script>

<style>
.bg-black { background-color: #1b1b1b; }
#backgroundCanvas, #clickCanvas {
  height: 90vh;
  width: 100vw;
  z-index: -1;
  position: absolute;
}
</style>
