import React, {Component} from 'react'
//Componentes Clase
class ComponenteClase extends Component{
  constructor (props){
    super(props)
    this.state = {
      personaje: null
    }
  }
  
  render(){
    /*
    let bloque
    if(!this.state.personaje){
      bloque = <span>Cargando....</span>
    }else{
      bloque = <>
              <img src={personaje.imageUrl}/>
              <h3>{personaje.name}</h3>
            </>
    }
    */
    const {personaje} = this.state

    return (
      <div className="personaje">
        {
          !personaje?
            <span>Cargando....</span>
          :
            <>
              <img src={personaje.imageUrl}/>
              <h3>{personaje.name}</h3>
              <p>{personaje.specie}</p>
            </>
        }
      </div>
    )
  }


  async componentDidMount(){
    console.log("El componente se montó")
    const response = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters/Gohan")

    const personaje = await response.json()
    //this.setState( {"personaje": personaje} )
    console.log(personaje)
    this.setState( {personaje} )
  }

  componentDidUpdate(){
    console.log("El componente se actualizó")
  }
}


export default ComponenteClase