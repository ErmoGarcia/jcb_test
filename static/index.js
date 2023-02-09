import 'vue'
import 'bootstrap-vue'
import 'plotly'
import 'axios'

var app = new Vue({
    el: '#app',
    data: {
        loading: false,
        loaded: false,
        chart: {
            x: [],
            y: []
        }
    },
    methods: {
        loadChart: async function (event) {
            this.loading = true

            try {
                const response = await axios.get('/data');

                this.chart.x = Object.values(response.data.a)
                this.chart.y = Object.values(response.data.b)

            } catch (error) {
                console.error(error);
            }

            this.loading = false
            this.loaded = true

            // var TESTER = document.getElementById('tester');
            // Plotly.newPlot( TESTER, [{
            // x: [1, 2, 3, 4, 5],
            // y: [1, 2, 4, 8, 16] }], {
            // margin: { t: 0 } } );
        }
    },
    delimiters: ['[[', ']]']
})


