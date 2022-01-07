import React from 'react'

// Styles
import { Layout, Wrapper } from './Dashboard.styles'

// Components
import Header from "./Header/Header"
import Graph from "./Graph/Graph"
import Selector from "./Selector/Selector"
import Summary from "./Summary/Summary"

const Dashboard = () => {
  return(
    <Layout>
      <Wrapper>
        <Header />
        <Selector />
        <Summary />
        <Graph />
      </Wrapper>
    </Layout>
  )
}

export default Dashboard