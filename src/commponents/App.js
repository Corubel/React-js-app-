import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import Home from "./views/Home"
import Products from "./views/Products"
import Contact from "./views/Contact"
import Header from "./layout/Header"


const App = props => {

  return (
      <BrowserRouter>  
        
        <Header/>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

        {/* ASIDE  / FOOTER  /  CHAT */}

      </BrowserRouter>
  )
}

export default App;
