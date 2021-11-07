<template>

<div>
  <p>The previous pages
     make administrative tasks a breeze, but would be nearly impossible for employees to
     decipher.  Instead, the Schedules page collects all the data from the other pages and
     presents it in a visually appealing and simple manner.  The header of the table is populated
     by the names of the employees while the left side is again populated by time.  A coach can
     find their name on the table and look in their column to see what class they are teaching,
     what time they are teaching it, and the different locations they will need to visit with the
     times they need to be there.  If needed, an administrator could make an edit to this page and
     have it manifest itself correctly on the previous two pages.
  </p>
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
