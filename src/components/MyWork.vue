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
         linkOne: "https://github.com/AlexanderCarlston/Personal-Site",
         linkTwo: "https://github.com/AlexanderCarlston",
         description: "My next step with this site is going to make the structure look better and have more advanced interactivity. I plan on making it so people are able to choose the colors in the layout and have the animations be more utilized. I would also like to make this more modular, but since I'm the only person who's going to work with it, it wasn't really worth the time.",
         image: "../static/screenshot.png"
       },
       {
         title: "GFlow",
         subTitle: "Galvanize's Queue OverFlow",
         linkOne: "https://github.com/g-overflow/gflow-frontend",
         linkTwo: "https://github.com/g-overflow/gflow-backend",
         description: "This was a group project where we had 3 1/2 days to implement agile methods to make an ambitious applcation. This was actually done in React so I learned how to contribue to a team where the front end framework was foreign. I knew enough to help and did whatever the team needed from me: I learned Github Oauth, Slack Oauth, JSX, Regex, Semantic Ui React, and enough React to contribute.",
         image: "../static/screenshot1.png"
       },
       {
         title: "CODE-BANK",
         subTitle: "Enabling developers, starting with their gists.",
         linkeOne: "http://code-bank.surge.sh/",
         linkTwo: "https://github.com/AlexanderCarlston/CODE-BANK",
         description: "(If you sign in wait for my API to load up)Code bank is a centralized platform for storing and exporting gists. With an emphasis on reusable and maintainable code, this site lets you use your Github gists to their full potential.",
         image: "../static/code-bank.png"
       }
     ]
   }),
   components: {
     MyWorkCards
   }
}
</script>

<style>
v-card {
  z-index: 1;
}
</style>
