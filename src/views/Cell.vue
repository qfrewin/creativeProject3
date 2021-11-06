<template>

<div>
  <CellFormat :classes="classes" :tableColors="tableColors" :table="table" :timeBlocks="timeBlocks"/>
</div>


</template>

<script>
  import CellFormat from "../components/CellFormat.vue"
  export default {
    name: 'Cell',

    components: {
      CellFormat
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
    },

  }
</script>
