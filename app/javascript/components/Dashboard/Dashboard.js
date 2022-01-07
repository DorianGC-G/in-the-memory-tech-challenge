import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Styles
import { Layout, Wrapper } from './Dashboard.styles'

// Components
import Header from "./Header/Header"
import Graph from "./Graph/Graph"
import Selector from "./Selector/Selector"
import Summary from "./Summary/Summary"

const Dashboard = () => {
  const [memories, setMemories] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('All')

  // Get data from localStorage if present
  const sessionState = sessionStorage.getItem('memoriesState')

  useEffect(() => {
    // Only call the API if data isn't in sessionStorage, else use sessionStorage
    if (sessionState == "[]" || sessionState == null) {
      axios.get('/api/v1/index')
        .then( resp => {
          setMemories(resp.data)
          sessionStorage.setItem('memoriesState', JSON.stringify(memories))
        })
        .catch(
          resp => console.log(resp)
        )
    } else {
      setMemories(JSON.parse(sessionState))
    }
  }, [memories.length])

  // Create a list of countries to send to the selector
  const memoryCountryList = memories.map( memory => {
    return(memory.country)
  })

  return(
    <Layout>
      <Wrapper>
        <Header />
        <Selector 
          countries={memoryCountryList}
          setSelectedCountryCallback={selectedCountry => setSelectedCountry(selectedCountry)} />
        <Summary />
        <Graph />
      </Wrapper>
    </Layout>
  )
}

export default Dashboard