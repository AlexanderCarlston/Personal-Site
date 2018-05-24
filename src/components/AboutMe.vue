<template >
  <v-container grid-list-xl>
    <v-layout>
      <v-flex xl12>
        <Name></Name>
      </v-flex>
    </v-layout>
    <v-parallax src="../static/fishthingy.jpg"></v-parallax>
    <v-jumbotron color="secondary" height="200px"dark>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-1">Custom Color</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <v-parallax src="../static/fishthingy.jpg"></v-parallax>
  <v-jumbotron color="secondary" height="200px"dark>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex text-xs-center>
        <h3 class="display-1">Custom Color</h3>
      </v-flex>
    </v-layout>
  </v-container>
</v-jumbotron>
  </v-container>
</template>

<script>
import Name from '@/components/Name.vue'
export default {
  name: "AboutMe",
  components: {
    Name
  }
}
</script>

<style scoped>

</style>
