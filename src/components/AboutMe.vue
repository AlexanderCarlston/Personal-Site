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
          <h3 class="title">I love coding. I know that seems like an obvious sentiment to put on a personal site for jobs, but I honestly couldn't image myself doing anything different. Constantly being challenged, while hurting the ego, is something that I love persisting through (finally not seeing an error in the console is fulfilling)</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <v-parallax src="../static/fishthingy.jpg"></v-parallax>
  <v-jumbotron color="secondary" height="200px"dark>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex text-xs-center>
        <h3 class="title">I think open source isn't only limited to the code. I'm open to criticism and am always looking to learn new technologies, or even how to make my code more readable.</h3>
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
