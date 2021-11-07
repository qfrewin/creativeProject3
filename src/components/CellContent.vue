<template>

<p>This is a test</p>
<div class="cell">
  <td style="transparent">
    <input
      v-model="userText"
      style="background-color:cellColor(i, j)"
      v-on:keyup="updateName(i, j)">
    </input>
  </td>
</div>
</template>

<script>
export default {
  name: 'CellContent',

  props: {
    classes: Array,
    tableColors: Object,
    table: Array
  }
}


</script>
