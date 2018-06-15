<template>
  <v-flex xs4>
    <v-card>
      <v-card-media
        :src='project.image'
        height="200px"
      >
      <img :src='project.image'>
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">{{project.title}}</div>
          <span class="grey--text">{{project.subTitle}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn :href="project.linkOne" flat>Open</v-btn>
        <v-btn :href="project.linkTwo" flat color="purple">Explore</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          {{project.description}}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "MyWorkCards",
  props: ["project"],
  data(){
    return {
      show: false
    }
  }
}
</script>

<style>
</style>
