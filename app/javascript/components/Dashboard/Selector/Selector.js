import React from 'react'

// Styles
import { Wrapper } from './Selector.styles'

const Selector = () => {
  return (
    <Wrapper>
      <h3>Country</h3>
      <select name="country" id="country-select">
        <option value="All">All</option>
        <option value="France">France</option>
      </select>
    </Wrapper>
  )
}

export default Selector