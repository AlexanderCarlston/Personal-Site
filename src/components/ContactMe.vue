<template>
  <v-container>
  <v-layout>
    <v-flex xl12>
      <Name></Name>
    </v-flex>
  </v-layout>
  <v-parallax src="../static/fishthingy.jpg"></v-parallax>
  <v-jumbotron color="primary" dark height="150px">
   <v-container fill-height>
     <v-layout align-center>
       <v-flex text-xs-center>
         <h3 class="display-3">Custom Color</h3>
       </v-flex>
     </v-layout>
   </v-container>
 </v-jumbotron>
</v-container>
</template>

<script>
import Name from '@/components/Name.vue'
export default {
  name: "ContactMe",
  components: {
    Name
  }
}
</script>

<style >
</style>
