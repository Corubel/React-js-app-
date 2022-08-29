import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';

//PROPS -> son los parametros que recibe el componente
const App = (props)=>{
  const {nombre, apellido, id} = props

  /*
    id -> es igual a id de hhtml
    className-> es igual a class de html
    style -> recibe un objeto

    Para interpolar una variable o cualquier codigo a interpretar se usan las llaves {variable}
  */

  return(
    <div id={id} className="bg-primary">
      <h1 style={{color:"red"}}>Esta es mi primer APP</h1>
      <h2>nombre: {nombre}</h2>
      <h2>apellido: {apellido}</h2>
    </div>
    //React.createElement("h1", null, "Esta es mi primer App" )
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
{/*
    *Para llamar a una funcion de componente se utlizan las etiquetas

    *Las props se envian como si fuesen atributos html

*/}
    <App 
      nombre="Carlos" 
      apellido="Sanchez" 
      id="principal"
    />
  </React.StrictMode>
);