import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const lineChartData = {
    labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    datasets: [
        {
            label: 'Ali Steps',
            data: [3000, 5000, 4500, 8000, 7000, 6000, 9000],
            borderColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Reza Steps',
            data: [5500, 9000, 2500, 14000, 9000, 4000, 10000],
            borderColor: 'rgb(214, 10, 88)',
        },
    ],
};

const LineChartComponent = () => {

    const options = {
        responsive: true,
        plugins: {
            Legend: {
                position: 'right',
                labels: {
                    color: 'white',  // Change legend text color
                },
            },
            title: {
                display: true,
                text: 'This is a text!',
                color: 'white',  // Change title text color
            },
            tooltip: {
                titleColor: 'white',  // Change tooltip title color
                bodyColor: 'white',  // Change tooltip body color
            },
        },
        elements: {
            arc: {
                borderWidth: 2,
                borderColor: 'white',  // Change the border color of the arcs
            },
        },
    };

    return (
        <div className='col-span-5 md:col-span-3 w-full py-7 bg-white rounded-xl box_shadow 
        dark:bg-gray-700 flex justify-center items-center'>
            <Line options={options} data={lineChartData} />
        </div>
    )
}

export default LineChartComponent
