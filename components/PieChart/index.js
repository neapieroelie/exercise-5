
import { Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { useState, useEffect } from "react";

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
);

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });


const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ["Red", "Blue", "Yellow", "Greed", "Purple", "Pink"],
        datasets: [
            {
                label: '# Votes',
                data: [10, 9, 12, 15, 10, 12],
                borderColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                backgroundColor: [
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(53, 162, 65, 0.4)',
                    'rgba(53, 32, 235, 0.4)',
                    'rgba(53, 162, 5, 0.4)',
                    'rgba(53, 2, 25, 0.4)',
                    'rgba(53, 32, 24, 0.4)'
                ],
                borderWidth: 1,
            }
        ]
    })


    setChartOptions({
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Sales by Day'
            },
            maintainAspectRatio: false,
            responsive: true
            
        }
    })
})
return (
    <>
        <div>
            <Pie data={chartData} options={chartOptions} style={{width:"500px", height:"300px"}}/>
        </div>
    </>
)
}