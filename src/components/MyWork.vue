<template>
  <v-container grid-list-xl>
    <v-layout row>
      <MyWorkCards v-for="project in currentProjects" :key="project.name" :project="project"/>
    </v-layout>
</v-container>
</template>

<script>
import MyWorkCards from './MyWorkCards.vue'
export default {
  name: "MyWork",
  data: () => ({
     show: false,
     currentProjects: [
       {
         title: "This site",
         subTitle: "My personal site v2",
         linkOne: "",
         linkTwo: "",
         description: "My next step with this site is going to make the structure look better and have more advanced interactivity. I plan on making it so people are able to choose the colors in the layout and have the animations be more utilized.",
        image: ""
       }
     ]
   }),
   components: {
     MyWorkCards
   }
}
</script>

<style >
</style>
