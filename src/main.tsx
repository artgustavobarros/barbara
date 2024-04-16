import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import Main from './pages/Main'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
      <Main/>
    </ThemeProvider>
  </React.StrictMode>,
)
