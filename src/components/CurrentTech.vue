<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="title">{{CurrentTechObject.name}} - {{CurrentTechObject.description}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="row wrap">
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
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text>
              {{card.description}}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: "CurrentTech",
  mounted(){
  },
  props: ["CurrentTechObject", "fireworks", "stars"],
  components: {
      
    },
    data: () => ({
  show: true
})
}
</script>

<style>

</style>
