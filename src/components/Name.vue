<template>
  <v-layout>
    <v-flex style='width: 50%;'>
      <v-card dark>
        <v-card-text class="title bg-black">
          <h3>Alexander Carlston</h3>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex style='width: 50%;'>
      <v-card dark color="primary">
        <AnimatedText/>
      </v-card>
    </v-flex>
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

<style scoped>

</style>
