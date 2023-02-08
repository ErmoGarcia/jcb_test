import 'vue'
import 'bootstrap-vue'
import 'plotly'

var app = new Vue({
    el: '#app',
    methods: {
        loadChart: function (event) {

          alert('Hello World !')

        }
    }
})

var TESTER = document.getElementById('tester');
Plotly.newPlot( TESTER, [{
x: [1, 2, 3, 4, 5],
y: [1, 2, 4, 8, 16] }], {
margin: { t: 0 } } );
