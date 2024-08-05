// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Route, BrowserRouter, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import RootLayout from './RootLayout';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  

  return (
    <>
    <Navbar/>
    
<Home/>
<Footer/>



    </>
  )
}

export default App
