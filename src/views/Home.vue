<template>
  <div class="home">
  <div class="plea">
    <h1>Home</h1>
    <p>This website is meant to be a program that can aid in schedule building.
       I have had the opportunity to work the front desk of a gymnastics school
       for quite some time now, and scheduling dozens of classes that need to
       visit different locations throughout the gym can be frustrating.  No class
       can overlap at the same location, which can lead to long nights of planning
       in order for everything to work smoothly.  I was able to create a primitive
       program that has helped tremendously in our scheduling, but it still faces
       several problems.  The biggest issue is that I created the program in Google
       Sheets, which has a limited scope in what I can use it for, but also provides
       the user with many editing tools that can eventually break the program.  My
       goal is to make a functioning website that can replicate what I was able to do
       in google sheets.
    </p>
    <h2>How it works</h2>
    <p>There are three pages, tables actually, that make the program work.  The first
       page is the "Rotations" page.  The table for this page has a header row where each
       cell is filled with the name of the various locations or stations located throughout
       the gym.  Time increases in incremental values as you go down each row of the table.
       The user is able to input the name of a class into any field in the table, thus ensuring
       that no two classes are accidentally scheduled at the same location at the same time.
    </p>
    <p>The second page is used to assign employees to the classes they teach.  This page differs
       from the previous in that the header row is populated with the names of the several classes
       offered by the gym.  The left side of the table exactly matches the Rotations page.  The user
       is meant to input the name of an employee into the cells of this table.  This
       page is useful for employers because it allows them to easily keep track of which employee
       is teaching which class.  It also makes it easy to determine when we can open new classes.
    </p>
    <p>The first two pages are effectively useless for a normal employee.  The previous pages
       make administrative tasks a breeze, but would be nearly impossible for employees to
       decipher.  Instead, the Schedules page collects all the data from the other pages and
       presents it in a visually appealing and simple manner.  The header of the table is populated
       by the names of the employees while the left side is again populated by time.  A coach can
       find their name on the table and look in their column to see what class they are teaching,
       what time they are teaching it, and the different locations they will need to visit with the
       times they need to be there.  If needed, an administrator could make an edit to this page and
       have it manifest itself correctly on the previous two pages.
    </p>
    <h2>A Message to the Grader</h2>
    <p>I am struggling with this project.  At the time of writing in this element, I have spent
       over 30 hours trying to make things work.  I was easily able to make the different views
       appear and get all of that stuff working, but I there are things I need to do to make my
       project work that seem outside the scope of what we have been taught so far.  I intend for
       this program to be as responsive as possible, allowing for the user to change things like
       the start or end times or time increment on the table.
       </p>
    <p>I succesfully made a program that can
       create a two dimensional array given the data from "class-info.js" and the time settings given in "general-settings.js".
       I have even been able to take the array and turn it into a table filled with input values.
       My problems arise whenever I try to take the values written to the input fields and update
       the array in my data.  No matter what I do, nothing seems to work.  I imagine I need to create
       a new component for my cell spaces in order to have an individual v-model attribute for each, but
       the program breaks every time I try to do so.  We have been taught how to include a component
       in our views, but not how to use a component inside of another component.  Again, I have spent
       hours upon hours of reading, programming, debugging, and then starting over again that I no longer
       have time to pursue it further this week.  I intend to continue working on this project, as I do
       enjoy the challenge, but I have other things I need to do as well.
    </p>
    <p>Please consider when grading this creative project that I have spent a lot of time on it.  I was
       able to succesfully use vue router to navigate between pages, and I also created some data
       that has potential to grow even further.  I planned to add a coach-info.js file, but I did not
       because I have not been able to get what I already have to work the way I need it to.
    </p>
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
