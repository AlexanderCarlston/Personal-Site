<template>
  <v-container grid-list-xl>
    <v-layout row>
      <v-flex v-for="project in currentProjects" :key="project.name" xs4 >
        <v-card>
          <v-card-media
            :src='project.image'
            height="200px"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{project.title}}</div>
              <span class="grey--text">{{project.subTitle}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn :href="project.linkOne"disabled flat>Open</v-btn>
            <v-btn :href="project.linkTwo" flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              {{project.description}}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
  name: "MyWork",
  data: () => ({
     show: false,
     currentProjects: [
       {
         title: "Metube",
         subTitle: "Youtube imitation",
         linkOne: "",
         linkTwo: "https://vuetifyjs.com/en/style/theme",
         description: "I'm currently working on a youtube imitation app. I was working on this site and discovered that Vue's drawer is extremely similar to youtube's layout (google design yay!). I'm doing this site because I'm generally curious how youtube works, and figure I can do code that is similar to one of the tech giants.",
         image: ""
       },
       {
         title: "Not Named Game",
         subTitle: "Lot of work",
         linkOne: "",
         linkTwo: "",
         description: "",
         image: ""
       }
     ]
   })
}
</script>

<style >
</style>
