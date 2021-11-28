import React from 'react'
// ! blog , feature
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header
} from './containers'
import { Brand, CTA, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
    </div>
  )
}

export default App
