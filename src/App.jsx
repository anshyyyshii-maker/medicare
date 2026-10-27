import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from "./Components/Home";
import Doctor from "./Components/doctor";
import Booking from './Components/booking'
import { Route,  Routes } from 'react-router-dom'
import About from './Components/About'
import Doctors from './Components/doctor'
import Departmentd from './Components/department'
import Contact from './Components/contact'
import Navbar from './Components/nav'
import Footer from './Components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/departments" element={<Departmentd/>}/>
    <Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer/>

    </>
  )
}

export default App
