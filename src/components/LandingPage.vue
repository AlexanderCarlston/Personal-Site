<template>
  <v-container grid-list-xl>
    <Name></Name>
    <v-jumbotron color="secondary" dark height="200px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">My name is Alexander Carlston and I am a full stack web developer.</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-btn @click="animateFireworks" block color="primary" dark>Animate</v-btn>
  </v-container>
</template>

<script>
import Name from '@/components/Name.vue'
import TechCanvas from '@/components/TechCanvas.vue'
export default {
  name: 'LandingPage',
  components: {
    Name,
    TechCanvas
  },
  props: ["loadTechnology", "animateFireworks"]
}


</script>

<style scoped>

</style>
