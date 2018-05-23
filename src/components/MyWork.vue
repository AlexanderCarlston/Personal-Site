<template >
  <v-layout row>
    <v-flex v-for="project in currentProjects" :key="project.name" xs4 >
      <v-card>
        <v-card-media
          src="/static/doc-images/cards/sunshine.jpg"
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
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
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
</template>

<script>
export default {
  name: "MyWork",
  data: () => ({
     show: false,
     currentProjects: [
       {
         title: "Title",
         subTitle: "sub",
         linkOne: "",
         linkTwo: "",
         description: "desc"
       }
     ]
   })
}
</script>

<style >
</style>
