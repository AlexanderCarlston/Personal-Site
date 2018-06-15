<template>
  <v-layout column >
    <h3 class="unselectable" >Alexander Carlston</h3>
      <AnimatedText class="bg-black"/>
  </v-layout>
  
</template>

<script>
import AnimatedText from '@/components/AnimatedText.vue'
export default {
  name: "Name",
  components: {
    AnimatedText
  }
}

</script>

<style >
h3 {
  font-size: 12vh;
}
AnimatedText {
  height: 200px;
}
</style>
