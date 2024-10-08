import React from 'react'
import { Pie } from 'react-chartjs-2';
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
        <div className='col-span-5 md:col-span-1 py-7 w-full h-full bg-white rounded-xl box_shadow
         dark:bg-gray-700 flex justify-center items-center'>
            <Pie options={options} data={pieChartData} />
        </div>
    )
}

export default PieChartComponent
