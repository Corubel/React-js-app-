import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"


function Categorias() {
    const {categoria} = useParams()// {categoria: "celulares"}

    const [products, setProducts] = useState(null)

    useEffect( ()=>{
        ( async ()=>{
            const response = await fetch("http://localhost:3001/products")
            const products = await response.json()
            setProducts(products)
        } )()
    }, [] )


    return (
        <>
            <h1>
                Categoria: {categoria}
            </h1>
            
            { 
                products? 
                    <ul>
                        {products.map( ({nombre, id}) => <li key={id}>{nombre}</li> )}
                    </ul>
                :
                    <h2>Cargando...</h2>
            }
        </>
    )
}

export default Categorias


// REST ->  entidad/id  method

// MVC ->  Controlador/Accion/Params   
        // Producto/Crear   -> form + AJAX -> POST: /productos
        // Producto/Editar/23 -> form + AJAX -> PATCH /productos/23

        // Producto/ObtenerTodos/categoria-celulares;precioMenor-10000
        // Producto/ObtenerUno/id-23

// Default -> Componente/Params/Componente
        // Producto/celulares/25