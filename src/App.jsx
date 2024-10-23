import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Btm from './Btm'
import Page3 from './Page3'
import Page4 from './Page4'
import Final from './Final'
import Contactus from './Contactus'
import Verificarion from './Verify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Updoc from './Updoc'
import Gallery from './Gallery'
import Preg from './Preg'
import Privacy from './Privacy'
import About from './About'
import ResultPage from './ResultPage'
function App() {




  return (
    <BrowserRouter>
      <Routes>

        <Route path='/contact' element={<Contactus />} />
        <Route path='/verify' element={<Verificarion/>} />
        <Route path='/update' element={<Updoc/>} />
        <Route path='/gallery' element={<Gallery/>}/>
         <Route path='/registration' element={<Preg/>}/>
         <Route path='/privacy' element={<Privacy/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path="/result" element={<ResultPage />} />
        <Route
          path='/*'
          element={
            <>
              <Navbar />
              <Slider />
              <Btm />
              <Page3 />
              <Page4 />
              <Final />
       
           
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
