import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import Home from "./pages/home"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
