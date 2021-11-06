<template>

<div>
  <SchedulesPage :classes="classes" :tableColors="tableColors"/>
</div>


</template>

<script>
  import SchedulesPage from "../components/SchedulesPage.vue"
  export default {
    name: 'Schedules',

    components: {
      SchedulesPage
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
