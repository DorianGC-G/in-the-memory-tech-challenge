import React from 'react'

// Components
import InfoBox from '../InfoBox/InfoBox'

// Styles
import { Wrapper, Content } from './Summary.styles'

const Summary = ({memory}) => {
  return (
    <Wrapper>
      <h3>Summary</h3>
      <Content>
        <InfoBox 
          title='Revenue'
          content={memory == undefined ? '' : memory.revenue} />
        <InfoBox 
          title='Average Rev / Order'
          content={memory == undefined ? '' : memory.average_revenue_per_order} />
        <InfoBox 
          title='Customers'
          content={memory == undefined ? '' : memory.unique_customers} />
      </Content>
    </Wrapper>
  )
}

export default Summary