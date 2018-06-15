<template>
  <v-container grid-list-xl>
    <v-layout column>
    <Name></Name>
    <v-btn @click="animateFireworks" block color="primary" dark>Animate</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Name from '@/components/Name.vue'
import TechCanvas from '@/components/TechCanvas.vue'
import AnimatedText from '@/components/AnimatedText.vue'

export default {
  name: 'LandingPage',
  components: {
    Name,
    TechCanvas,
    AnimatedText
  },
  props: ["loadTechnology", "animateFireworks"]
}


</script>

<style scoped>

</style>
