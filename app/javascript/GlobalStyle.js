import { createGlobalStyle } from 'styled-components'

// Fonts
import neueMontrealThin from './Fonts/neuemontreal-thin-webfont.woff'
import neueMontrealLight from './Fonts/neuemontreal-light-webfont.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'neue_montreal_thin';
    src: url(${neueMontrealThin}) format('woff')
  }
  @font-face {
    font-family: 'neue_montreal_light';
    src: url(${neueMontrealLight}) format('woff')
  }


  :root {
    --maxWidth: 1280px;
  }

  * {
    font-family: 'neue_montreal_thin';
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  body {
    background-color: #f0f0f0
  }
`
