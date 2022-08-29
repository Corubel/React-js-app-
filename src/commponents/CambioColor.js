import {useState} from 'react'

const Texto = props =>{
  const {colorTexto, colorFondo} = props
  const style = {
    color: colorTexto,
    backgroundColor: colorFondo
  }
  return(
    <div style={style}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque iure cum, deleniti esse non eveniet quas? Adipisci odit enim dolores quos eius reiciendis unde eum, exercitationem deserunt rerum assumenda.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque iure cum, deleniti esse non eveniet quas? Adipisci odit enim dolores quos eius reiciendis unde eum, exercitationem deserunt rerum assumenda.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque iure cum, deleniti esse non eveniet quas? Adipisci odit enim dolores quos eius reiciendis unde eum, exercitationem deserunt rerum assumenda.</p>
    </div>
  )
}





const CambioColor = props => {
  const [colores, setColores] = useState({
    colorTexto: "white",
    colorFondo: "black"
  })

  const {colorTexto, colorFondo} = colores

  const handleClick = ev =>{
    setColores({
      colorTexto: "red",
      colorFondo: "orange"
    })
  }

  return (
      <div>
        <button onClick={handleClick}>Cambiar</button>
        <Texto colorTexto={colorTexto} colorFondo={colorFondo}/>
      </div>
  )
}

export default CambioColor;