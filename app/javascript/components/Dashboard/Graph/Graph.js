import React from 'react'

// Styles
import { Wrapper, GraphContainer, GraphBorder, GraphBar, Revenue, Time } from './Graph.styles'

const Graph = () => {
  return(
    <Wrapper>
      <h3>Monthly View</h3>
      <GraphContainer>
        <Revenue>Revenue</Revenue>
        <Time>Time</Time>
        <GraphBorder>
          <GraphBar style= {{height: "180px"}}/>
          <GraphBar style= {{height: "50px"}}/>
          <GraphBar style= {{height: "120px"}} />
        </GraphBorder>
      </GraphContainer>
    </Wrapper>
  )
}

export default Graph