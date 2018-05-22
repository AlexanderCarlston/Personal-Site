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
  <v-btn block color="secondary" dark>Animate</v-btn>
  <v-layout>

  </v-layout>
  </v-container>
</template>

<script>
import Name from '@/components/Name.vue'
export default {
  name: 'LandingPage',
  components: {
    Name
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
