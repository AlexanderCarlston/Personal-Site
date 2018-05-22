<template>
  <v-container grid-list-xl>
    <Name></Name>
    <v-jumbotron color="primary" dark height="200px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Description maybe with button to shorten</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-layout justify-center>
      <TechCanvas></TechCanvas>
    </v-layout>
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
  }
}


</script>

<style scoped>

</style>
