import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom"

import App from './App'
import { ProviderWrapper as BlockCovidContext } from "../../contexts/BlockCovidContext"


const AppContainer = () => {

  return (
    <Router>
      <BlockCovidContext>
          <App />
      </BlockCovidContext>
    </Router>
  )
}

export default AppContainer