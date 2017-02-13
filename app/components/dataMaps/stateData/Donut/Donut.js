import React from 'react';

let DoughnutChart = require("react-chartjs").Doughnut;

class Donut extends React.Component {

    render() {
        let chartOptions = {
            animation: {
                animateScale: true
            },
            segmentStrokeColor: "transparent",
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value + ' %' %>"

        };

        let pieData = [
            {
                value: 35,
                color: "#d9372d"
            },
            {
                value: 100 - 35,
                color: "#1EBBDD"
            }
        ];

        return (
            <DoughnutChart
                width={300}
                height={150}
                data={pieData}
                options={chartOptions}/>
        )
    }
}

export default Donut;