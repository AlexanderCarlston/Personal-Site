<template>
    <v-layout>
      <v-flex>
        <v-progress-circular :size="300" :width="7" indeterminate color="purple"></v-progress-circular>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style>
div {
  text-align: center
}
.progress-circular {
  margin: 1rem
}
</style>
