import React from 'react'
import { Cards, Chart, CountryPicker } from './components/index'
import styles from './App.module.css'
import { fetchData, fetchDailyData } from './api/index'

class App extends React.Component {
    state = {
        data: {},
        dailyData: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const dailyData = await fetchDailyData();
        this.setState({
            data: fetchedData,
            dailyData: dailyData
        })
    }
    render() {
        const { data } = this.state
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App