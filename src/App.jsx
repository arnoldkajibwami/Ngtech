import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavbarHeader from './NavbarHeader'
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Service from './Service';
import Contact from './Contact'
import Posts from './Posts';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavbarHeader />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Posts />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

