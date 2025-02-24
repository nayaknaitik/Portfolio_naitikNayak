/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Page1/>
      <Page2/>
      <Page3 />
      <Page4 />
      <Footer />
    </>
  )
}

export default App
