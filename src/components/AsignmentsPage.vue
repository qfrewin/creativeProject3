<template>
<div>
  <p>Asignments page</p>

  <div class="wrapper">

    <div class="new-table">
      <table>
        <div class="rows" v-for="(row, i) in table">
          <tr>
            <div v-for="(col, j) in row">
              <td style="transparent">
                <input
                  v-model="userText"
                  style="background-color:cellColor(i, j)"
                  v-on:keyup="updateName(i, j)">
                </input>
              </td>
            </div>
          </tr>
        </div>
      </table>
    </div>

  </div>

</div>
</template>


<script>
//<div id="table-asignments" v-html="createTable()"></div>


export default {
  name: 'AsignmentsPage',

  props: {
    classes: Array,
    tableColors: Object,
    table: Array
  },
/*
  data() {
    return {
      this.userText: '',
    }
  },*/

  methods: {
    getValueOnTable(row, col) {
      return this.table[row][col];
    },
    /*
    createTable() {
      var results = "<table><tr>";
      for (var i = 0; i < this.table[0].length; i++) {
        results += "<th>" + this.table[0][i].name + "</th>";
      }
      results += "</tr>";

      for (var i = 1; i < this.table.length; i++) {
        results += "<tr>";
        for (var j = 0; j < this.table[0].length; j++) {
          var cellContent = "<div id=" + '"' + "r" + i + "c" + j + '"' + "><td ";
            cellContent += "style=" + '"background-color:' + this.cellColor(i, j, this.table[i][j].name) + ';" >';
            if (j == 0) {
              cellContent += "<p>" + this.table[i][j].time + "</p>";
            }
            else {
                cellContent += "<input ";
                  cellContent += "value=" + '"' + this.table[i][j].name + '" ';
                  cellContent += "onkeyup=" + '"' + "updateName()" + '" ';
                  cellContent += ">";
                cellContent += "</input>";
            }
          cellContent += "</div></td>"
          results += cellContent;
        }
        results += "</tr>";
      }
      results += "</table>";
      console.log(results);
      return results;
    },*/
    cellColor(row, col) {
      var value = this.table[row][col];
      var color;
      if ((row % 2) == 0) {
        color = this.tableColors.even;
      }
      else {
        color = this.tableColors.odd;
      }

      if (value != "" && col != 0) {
        var objFound = this.classes.findIndex(obj => obj.name.toLowerCase() == value.toLowerCase());
        if (objFound < 0) {
          objFound = this.classes.findIndex(obj => obj.abbreviation.toLowerCase() == value.toLowerCase());
        }

        if (objFound != -1) {
          //var objectFound = this.classes[objFound];
          color = this.classes[objFound].color;
        }
      }
      return color;
    },
    updateName() {
      console.log("worked");
      return "";
    },
    updateName(row, col) {
      console.log(this.table[row][col]);
      this.table[row][col].name = this.userText;
    }
  }
}

</script>

<style>

.break {
  display: flex;
  height: 400px;
  width: 100%;
}

td {
  border: black solid 1px;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

table {
  margin: 0;
  padding: 0;
  border-collapse: collapse;
}

input {
  text-align: center;
}
input:focus, textarea:focus, select:focus{
  outline: none;
}

th {
  background-color: #0abab4;
}

input {
  background-color: transparent;
}

</style>
