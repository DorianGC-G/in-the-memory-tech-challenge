import React from 'react'
import { nFormatter } from '../../../helpers'

// Styles
import { Wrapper, GraphContainer, GraphBorder, GraphBar, Revenue, Time, Total, Date } from './Graph.styles'

const Graph = ({monthlyView, country}) => {

  const heightCalc = (num) => {
    let size = 0
    const countries = ['Netherlands', 'Australia', 'Germany', 'France', 'EIRE']
    if (country == 'United Kingdom' || country == 'All') {
      size = Math.round((num / 1000 / 6))
    } else if (countries.includes(country)) {
      size = Math.round((num / 100 / 3))
    } else {
      size = Math.round((num / 10 / 6))
    }
    return (
      `${Math.sign(size) == -1 ? 0 : size}px`
    )
  }

  return(
    <Wrapper>
      <h3>Monthly View</h3>
      <GraphContainer>
        <Revenue>Revenue</Revenue>
        <Time>Time</Time>
        <GraphBorder>
          {monthlyView.map(month => {
            return (
              <GraphBar 
                key={month[0]} 
                style={{height: heightCalc(month[1])}}>
              <Total>{nFormatter(parseInt(month[1]))}</Total>
              <Date>{month[0]}</Date>
              </GraphBar>
            )
          })}
        </GraphBorder>
      </GraphContainer>
    </Wrapper>
  )
}

export default Graph