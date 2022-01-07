import React from 'react'

// Styles
import { Wrapper } from './InfoBox.styles'

const InfoBox = ({title, content}) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <h2>{content}</h2>
    </Wrapper>
  )
}

export default InfoBox