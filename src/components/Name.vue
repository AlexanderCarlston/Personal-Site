<template>
  <v-layout>
    <v-flex>
      <v-card dark color="primary">
        <v-card-text class="title">Alexander Carlston</v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
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
