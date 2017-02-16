import React from 'react';
let BarChart = require("react-chartjs").Bar;

class ElectoralCollege extends React.Component {

    render() {
        let barOption =  {
            responsive: true,
            barValueSpacing: 2,
            segmentStrokeColor: "transparent",
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value + ' %' %>"
        };

        let barChartData = {
            labels: ["2001", "2002", "2003", "2004", "2005"],
            datasets: [
                {
                fillColor: ["rgba(220,220,220,0.5)", "navy", "red", "orange"],
                strokeColor: "transparent",
                borderColor: "transparent",
                data: [
                    '10',
                    '20',
                    '30',
                    '40',
                    '50',
                ]
            }
            ]
        };

        return (
            <BarChart
                width={600}
                height={350}
                data={barChartData}
                option={barOption} />
        )
    }
}

export default ElectoralCollege;