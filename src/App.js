// import React, { useEffect } from 'react'
import Navbar from './components/nvabar/Navbar'
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
// import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Link from './pages/link/Link'
import Hotel from './pages/registraionCard/hotel/Hotel'
import SpeechRecognition,{ useSpeechRecognition } from 'react-speech-recognition'
import { useState } from 'react'
const App = () => {
 const [redirectUrl,setRedirectUrl]= useState("")
  const commands =[
    {
      command:["Go to *", "Open to *"],
      callback:(redirectPage)=>setRedirectUrl(redirectPage)
    }
  ]
  const {
    transcript
  }=useSpeechRecognition({commands})

  const pages=["home", "link","hotel"];
  const urls =
  {
    home:"/",
    link:"/link",
    hotel:"/hotel"
  }
  
  let redirect="";

  if(redirectUrl){
  if(pages.includes(redirectUrl)){
    redirect = <Navigate to={urls[redirectUrl]} />; 

  }else{
    redirect = <p>Could not find the page : {redirectUrl}</p>
  }
  }





  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
   <>
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route exact path="/"  element={<Home/>} />
        <Route  path="/link"  element={<Link/>} />
        <Route  path="/hotel"  element={<Hotel/>} />
        {redirect}
        </Routes>
    </BrowserRouter>
     <div className=''>
     <p className='text-center'>voice: {transcript}</p>
     <div className=''>
     <button  onClick={SpeechRecognition.startListening}>Start</button>
     </div>
    </div>
    </>
  )
}

export default App
