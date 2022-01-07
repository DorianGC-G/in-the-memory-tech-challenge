import React from 'react'

// Components
import InfoBox from '../InfoBox/InfoBox'

// Styles
import { Wrapper, Content } from './Summary.styles'

const Summary = () => {
  return (
    <Wrapper>
      <h3>Summary</h3>
      <Content>
        <InfoBox 
          title="Revenue"
          content="8M €" />
        <InfoBox 
          title="Average Rev / Order"
          content="4M €"/>
        <InfoBox 
          title="Customers"
          content="53K"/>
      </Content>
    </Wrapper>
  )
}

export default Summary