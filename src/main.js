import Vue from 'vue'
import App from './App.vue'
import router from './router'

import classInfo from './class-info.js'
import settings from './general-settings.js'

let data = {
  classes: classInfo,
  tableColors: {
    head: "#0abab4",
    odd: "#ffffff",
    even: "#def4f4"
  },
  startTime: settings.startTime,
  endTime: settings.endTime,
  block: settings.block,
  timeBlocks: settings.timeBlocks,
  tables: {
    rotationTable: [],
    asignmentTable: createAsignmentTable(),
    scheduleTable: [],
  }
}



function createAsignmentTable() {
  var result = [];

  var head = [];
  head.push({name: "", color: ""});
  for (var i = 0; i < classInfo.length; i++) {
    head.push(classInfo[i]);
  }
  result.push(head);

  for (var i = 0; i < settings.timeBlocks.length; i++) {
    var row = [];
    for (var j = 0; j < classInfo.length + 1; j++) {
      if (j == 0) {
        row.push({name: settings.timeBlocks[i], color: ""})
      }
      else {
        row.push({name: "", color: ""});
      }
    }
    result.push(row);
  }
  return result;
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
