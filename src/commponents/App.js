import React, {Component} from 'react'
import "./Personaje.css"

import ComponenteClase from './ComponenteClase'
import ComponenteFuncion from './ComponenteFuncion'


const App = props => {

  return (
      <>
        <ComponenteClase mensaje="Hola, soy un componente tipo Clase"/>
        <ComponenteFuncion />
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


