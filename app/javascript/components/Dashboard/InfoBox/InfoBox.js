import React from 'react'
import { nFormatter } from '../../../helpers'

// Styles
import { Wrapper } from './InfoBox.styles'

const InfoBox = ({title, content}) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <h2>{nFormatter(parseInt(content), 2) + (title != "Customers" ? "€" : "")}</h2>
    </Wrapper>
  )
}

export default InfoBox