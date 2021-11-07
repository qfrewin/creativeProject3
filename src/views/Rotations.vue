<template>

<div>
<p>This first
   page is the "Rotations" page.  The table for this page has a header row where each
   cell is filled with the name of the various locations or stations located throughout
   the gym.  Time increases in incremental values as you go down each row of the table.
   The user is able to input the name of a class into any field in the table, thus ensuring
   that no two classes are accidentally scheduled at the same location at the same time.
</p>
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
