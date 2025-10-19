import Home from "./components/home/Home"
import Products from "./components/products/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App