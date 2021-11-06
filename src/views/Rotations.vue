<template>

<div>
  <RotationsPage :classes="classes" :tableColors="tableColors"/>
</div>


</template>

<script>
  import RotationsPage from "../components/RotationsPage.vue"
  export default {
    name: 'Rotations',

    components: {
      RotationsPage
    },

    computed: {
      classes() {
        return this.$root.$data.classes;
      },
      tableColors() {
        return this.$root.$data.tableColors;
      }
    },

  }
</script>
