import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './country_picker.module.css'
import { fetchCountries } from '../../api/index'

const CountryPicker = ({handleCountryChange}) => {
    
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setFetchedCountries])

    console.log(fetchedCountries)
    return (
        <FormControl className={styles.formControl} id="select">
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker