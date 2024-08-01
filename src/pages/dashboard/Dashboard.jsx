import React from 'react'
import LineChartComponent from '../../components/charts/LineChartComponent'
import PieChartComponent from '../../components/charts/PieChartComponent'
import DoughnutChartComponent from '../../components/charts/DoughnutChartComponent'
import Cards from './Cards';

const Dashboard = () => {
    return (
        <div className='mt-3'>
            <Cards/>
            <div className='grid grid-cols-5 gap-3 mt-3 h-full'>
                <LineChartComponent />
                <PieChartComponent />
                <DoughnutChartComponent />
            </div>
        </div>
    )
}

export default Dashboard
