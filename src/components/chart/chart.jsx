import React, { useEffect } from 'react'
import { fetchDailyData } from '../../api/index'
import { Line, Bar } from 'react-chartjs-2'
import styles from './chart.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = React.useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData.length !== 0 ? <Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: '#3333ff',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                }]
            }}
        /> : null
    )
    console.log(dailyData[0])
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart