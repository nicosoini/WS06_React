import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Content/>
      <Footer />
    </> 
  )
}

export default App
