import React from 'react'
import ReactDOM from 'react-dom'

// Global styles import
import { GlobalStyle } from '../GlobalStyle'

// App component
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <App />
      <GlobalStyle />
    </>,
    document.body.appendChild(document.createElement('div')),
  )
})
