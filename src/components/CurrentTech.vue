<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card dark color="secondary">
          <v-card-text class="title">{{CurrentTechObject.name}} - {{CurrentTechObject.description}}</v-card-text>
        </v-card>
      </v-flex>
      <TechCanvas ></TechCanvas>
    </v-layout>
    <v-layout row>
      <v-flex v-for="card in CurrentTechObject.card" :key="card.name" xs4>
        <v-card >
          <v-card-title primary-title>
            <div>
              <div class="headline">{{card.title}}</div>
              <span class="grey--text">{{card.subTitle}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn :href='card.link' flat color="black">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              {{card.description}}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TechCanvas from '@/components/TechCanvas.vue'
export default {
  name: "CurrentTech",
  props: ["CurrentTechObject"],
  components: {
      TechCanvas
    },
    data: () => ({
  show: false
})
}
</script>

<style>
</style>
