
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { useState, useEffect } from "react";

ChartJS.register(
    CategoryScale, 
    LinearScale,
    BarElement, 
    Title, 
    Tooltip, 
    Legend
);

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });


const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
        datasets: [
            {
                label: 'Data 1',
                data: [23, 2, 34, 6, 5, 24, 3],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            },
            {
                label: 'Data 2',
                data: [2, 3, 19, 32, 15, 12, 8],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            },
            {
                label: 'Data 3',
                data: [20, 6, 5, 35, 21, 12, 9],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            }
        ]
    })


    setChartOptions({
        indexAxis: 'y',
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
            <Bar data={chartData} options={chartOptions} style={{width:"500px", height:"300px"}}/>
        </div>
    </>
)
}