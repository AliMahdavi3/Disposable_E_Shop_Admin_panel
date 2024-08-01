import React from 'react'
import { Pie , Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const pieChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
        {
            label: 'Ali Steps',
            data: [120, 90, 60, 40, 30],
            backgroundColor: [
                'teal',
                '#5610b1',
                'teal',
                '#5610b1',
                'teal',
            ],
            hoverEffect: 4,
        },
    ],
};

const PieChartComponent = () => {

    const options = {
        responsive: true,
        plugins: {
            Legend: {
                position: 'right',
            },
            Title: {
                display: true,
                text: 'This is a text!'
            },
        },
    };

    return (
        <div className='col-span-5 md:col-span-1 py-7 w-full h-full bg-white rounded-xl box_shadow
         flex justify-center items-center'>
            <Pie options={options} data={pieChartData} />
        </div>
    )
}

export default PieChartComponent
