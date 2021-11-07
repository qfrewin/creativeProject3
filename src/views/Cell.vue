<template>

<div>
  <CellContent :classes="classes" :tableColors="tableColors" :table="table" :timeBlocks="timeBlocks"/>
</div>


</template>

<script>
  import CellContent from "../components/CellContent.vue"
  export default {
    name: 'Cell',

    components: {
      CellContent
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
