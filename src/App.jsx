import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/index.css"
import React from 'react'
import Page1 from './pages/Page1'
import Navigation from './components/Navigation'
import Page1Second from './pages/page1Second'

const App = () => {
  return (
    <>
      <div className="app">
      <div className="sticky_nav">
      <Navigation/>
      </div>
      <Page1/>
      <Page1Second/>
      </div>
    </>
  )
}

export default App