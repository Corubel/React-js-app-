import {Link} from "react-router-dom"

function Header(){
    return(
        <header>
          <h1>MiWeb</h1>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
    )
}

export default Header; 