<template>
    <div style="width:100%; min-height:400px;">
         <div id="calendarMsg" style="height:100%;"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    data(){
        return{
            cellSize:[100, 100],
            pieRadius:50,

        }
    },
    mounted(){
    //   var myChart = echarts.init(document.getElementById('calendarMsg'));
        var dom = document.getElementById("calendarMsg");
        var myChart = echarts.init(dom);
        var app = {};
        var cellSize = [50, 50];
        var pieRadius = 15;

        function getVirtulData() {
            var date = +echarts.number.parseDate('2017-02-01');
            var end = +echarts.number.parseDate('2017-03-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data;
        }

        function getPieSeries(scatterData, chart) {
            return echarts.util.map(scatterData, function (item, index) {
                var center = chart.convertToPixel('calendar', item);
                return {
                    id: index + 'pie',
                    type: 'pie',
                    center: center,
                    label: {
                        normal: {
                            formatter: '{c}',
                            position: 'inside'
                        }
                    },
                    radius: pieRadius,
                    data: [
                        {name: '工作', value: Math.round(Math.random() * 24)},
                        {name: '娱乐', value: Math.round(Math.random() * 24)},
                        {name: '睡觉', value: Math.round(Math.random() * 24)}
                    ]
                };
            });
        }

        function getPieSeriesUpdate(scatterData, chart) {
            return echarts.util.map(scatterData, function (item, index) {
                var center = chart.convertToPixel('calendar', item);
                return {
                    id: index + 'pie',
                    center: center
                };
            });
        }

        var scatterData = getVirtulData();

        var option = {
            tooltip : {},
            // legend: {
            //     data: ['工作', '娱乐', '睡觉'],
            //     bottom: 20
            // },
            calendar: {
                top: 'middle',
                left: 'center',
                orient: 'vertical',
                cellSize: cellSize,
                yearLabel: {
                    show: false,
                    textStyle: {
                        fontSize: 12,
                    }
                },
                dayLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#333',
                    },
                    margin: 30,
                    firstDay: 1,
                    nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                },
                monthLabel: {
                    show: false
                },
                range: ['2017-02']
            },
            series: [{
                id: 'label',
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return echarts.format.formatTime('dd', params.value[0]);
                        },
                        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                        textStyle: {
                            color: '#000',
                            fontSize: 12
                        }
                    }
                },
                data: scatterData
            }]
        };

        if (!app.inNode) {
            var pieInitialized;
            setTimeout(function () {
                pieInitialized = true;
                myChart.setOption({
                    series: getPieSeries(scatterData, myChart)
                });
            }, 10);

            app.onresize = function () {
                if (pieInitialized) {
                    myChart.setOption({
                        series: getPieSeriesUpdate(scatterData, myChart)
                    });
                }
            };
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }


    },
    methods:{
    }
}
</script>
<style lang="scss">

</style>


