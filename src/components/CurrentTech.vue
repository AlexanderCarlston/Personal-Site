<template>
  <v-container>
    <v-layout>
      <v-flex>
        <TechCanvas></TechCanvas>
      </v-flex>
      <v-flex xs12 sm5 md5>
        <v-card dark color="green">
          <v-card-text>{{CurrentTechObject.name}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex v-for="card in CurrentTechObject.card" xs4>
        <v-card >
          <v-card-title primary-title>
            <div>
              <div class="headline">{{card.title}}</div>
              <span class="grey--text">{{card.subTitle}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="purple">Explore</v-btn>
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
