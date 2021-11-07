<template>

<div>
<p>This page is used to assign employees to the classes they teach.  This page differs
   from the previous in that the header row is populated with the names of the several classes
   offered by the gym.  The left side of the table exactly matches the Rotations page.  The user
   is meant to input the name of an employee into the cells of this table.  This
   page is useful for employers because it allows them to easily keep track of which employee
   is teaching which class.  It also makes it easy to determine when we can open new classes.
</p>
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
