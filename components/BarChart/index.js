
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

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });


const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
        datasets: [
            {
                label: 'Sales $',
                data: [10, 9, 12, 15, 10, 12, 8],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
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
            <Bar data={chartData} options={chartOptions} style={{width:"500px", height:"300px"}}/>
        </div>
    </>
)
}