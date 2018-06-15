<template>
  <v-container grid-list-xl>
  <v-layout>
    <v-flex xl12>
      <Name></Name>
    </v-flex>
  </v-layout>
  <v-parallax src="../static/me.jpg"></v-parallax>
  <v-jumbotron color="primary" dark height="100px">
   <v-container fill-height>
     <v-layout align-center>
       <v-flex>
         <v-icon>phone</v-icon>
         <span>720-400-6336</span>
       </v-flex>
       <v-flex>
         <v-icon>contact_mail</v-icon>
         <span>alekscarlston@yahoo.com</span>
         </v-flex>
         <v-flex>
         <i class="devicon-github-plain title"></i>
         <span>https://github.com/StephenTalking</span>
         </v-flex>
         <v-flex>
         <span>Linkedin: https://www.linkedin.com/in/alexander-carlston/</span>
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

<style scoped>

</style>
