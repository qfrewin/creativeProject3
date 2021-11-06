<template>

<div>
  <AsignmentsPage :classes="classes" :tableColors="tableColors" :table="table" :timeBlocks="timeBlocks"/>
</div>


</template>

<script>
  import AsignmentsPage from "../components/AsignmentsPage.vue"
  export default {
    name: 'Asignments',

    components: {
      AsignmentsPage
    },

    computed: {
      classes() {
        return this.$root.$data.classes;
      },
      tableColors() {
        return this.$root.$data.tableColors;
      },
      table() {
        return this.$root.$data.tables.asignmentTable;
      },
      timeBlocks() {
        return this.$root.$data.timeBlocks;
      }
    },

  }
</script>
