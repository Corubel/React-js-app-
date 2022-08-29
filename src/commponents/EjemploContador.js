import React, {Component} from 'react'
//Componentes Clase
class ComponenteClase extends Component{
  constructor (props){
    super(props)
    this.state = {
      contador: 0
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(ev) {
      const {contador} = this.state
      this.setState({contador: contador+1})
  }
  
  render(){
    const {mensaje} = this.props
    const {contador} = this.state
    return (
      <div>
        <h1>{mensaje}</h1>
        <h3>{contador}</h3>
       
        <button onClick={ev=>{this.handleSubmit(ev)}}>+</button>
      </div>
    )
  }


  componentDidMount(){
    console.log("El componente se montó")
  }

  componentDidUpdate(){
    console.log("El componente se actualizó")
  }
}


const App = props => {

  return (
      <>
        <ComponenteClase mensaje="Hola, soy un componente tipo Clase"/>
      </>
  )
}

export default App;

/*
Llamo al componente 
  El componente necesita renderizar, no puede esperar
    Renderiza un html de cargando... 
      Cuando se termina de montar el cargando se busca la info que se necesita
        Cuando tengo la info modifo un estado con la nueva informacion
          Realizo un nuevo render con la nueva info


Function toma el contexto desde donde es llamada
Flecha toma el contexto desde donde es declarada
*/