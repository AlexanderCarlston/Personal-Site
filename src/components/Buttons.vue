<template >
<v-flex>
  <v-btn-toggle v-model="toggle_multiple" multiple>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
  </v-btn-toggle>
</v-flex>
</template>

<script>
export default {
  name: "Buttons",
  data(){
    return {
      toggle_multiple: [0, 1, 2, 3]
    }
  }
}
</script>

<style scoped="">
</style>
