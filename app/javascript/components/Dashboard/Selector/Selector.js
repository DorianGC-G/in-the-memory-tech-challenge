import React, { useState } from 'react'

// Styles
import { Wrapper } from './Selector.styles'

const Selector = ({countries, setSelectedCountryCallback}) => {

  const [selectedCountry, setSelectedCountry] = useState("All")
  const changeSelectedCountry = (value) => {
    setSelectedCountry(value)
    setSelectedCountryCallback(value)
  }

  return (
    <Wrapper>
      <h3>Country</h3>
      <select name="country" id="country-select" onChange={e => changeSelectedCountry(e.currentTarget.value)}>
        {countries.map(country => {
          return (
            <option value={country} key={country}>{country}</option>
          )
        })}
      </select>
    </Wrapper>
  )
}

export default Selector