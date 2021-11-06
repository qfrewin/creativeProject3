<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div>
      <RotationsPage :classes-"classes" :tableColors="tableColors"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RotationsPage from "../components/RotationsPage.vue"

export default {
  name: 'Home',

  components: {
    HelloWorld,
    RotationsPage
  },

  computed: {
    classes() {
      return this.$root.$data.classes;
    },
    tableColors() {
      return this.$root.$data.tableColors;
    }
  }
}
</script>
