import 'vue'
import 'bootstrap-vue'
import 'plotly'
import 'axios'

Vue.component("chart", {
    props: ["chartData"],
    template: "<div id='chart' style='margin-top: 2rem; width: 120rem; height: 50rem;'></div>",
    mounted: function () {
        var trace = {
            x: this.$props.chartData.x,
            y: this.$props.chartData.y,
            mode: 'markers',
            type: 'scatter'
        };
        Plotly.react( 'chart', [trace]);
    }
});

var app = new Vue({
    el: '#app',
    data: {
        loading: false,
        chartData: {
            x: [],
            y: []
        }
    },
    computed: {
        loaded() {
            return this.chartData.x.length !== 0 && this.chartData.y.length !== 0
        }
    },
    methods: {
        loadChart: async function (event) {
            this.loading = true

            await this.fetchData()

            this.loading = false
        },
        fetchData: async function () {
            try {
                const response = await axios.get('/data');

                this.chartData.x = Object.values(response.data.a)
                this.chartData.y = Object.values(response.data.b)

            } catch (error) {
                console.error(error);
            }
        }
    },
    delimiters: ['[[', ']]']
})
