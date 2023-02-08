import 'vue'
import 'bootstrap-vue'

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

// createApp({
//     data() {
//       return {
//         message: 'Hello Vue!'
//       }
//     },
//     delimiters: ['[[', ']]']
// }).mount('#app')