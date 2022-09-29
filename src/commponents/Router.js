import {Routes, Route} from "react-router-dom"

import Home from "./views/Home"
import Products from "./views/Products"
import Categorias from "./views/Categorias.js"
import Contact from "./views/Contact"


function Router(){
    return(
        <Routes>
                {/*<Route path="/:controller/:action/:params" element={<Router/>}/>*/}

                <Route path="/home" element={<Home/>}/>
                {
                //RUTAS POR SEPARADO
                //<Route path="/products" element={<Products/>}/>
                //<Route path="/products/:categoria" element={<Products/>}/>
                }

                <Route path="/products" element={<Products/>}>
                    <Route path=":categoria" element={<Categorias/>}/>
                </Route>

                <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Router