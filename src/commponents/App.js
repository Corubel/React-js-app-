import React, {useState, useEffect} from 'react'
import "./FromLogin.css"
//Enlazamiento de inputs

function FormInput(props){
  const {labelText, id, name} = props
  const type = props.type || "text"

  const [value, setValue] = useState("")

  const handleChange = ev => {
    setValue(ev.target.value)
  }

  return(
    <div className="campo">
      <label htmlFor={id} > {labelText} </label>
      <input type={type} id={id} name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

function FormInputPassword(props){
  const {labelText, id, name} = props
  return (
    <FormInput labelText={labelText} id={id} 
      name={name} type="password"
    />
  )
}

function FormLogin(){

  return (
    <form>
      <FormInput labelText="Nombre de Usuario" 
        id="username" name="username" 
      />
      
      <FormInputPassword labelText="Contraseña"
        id="password" name="password"
      />

      <button type="submit">Ingresar</button>
    </form>
  )
}


function FormPersonaje(){
  const [personaje, setPersonaje] = useState("new")

  const [personajes, setPersonajes] = useState(null)
  //useEffect /callback /autoinvocada asincronica
  //useEffect( ()=>{  (async ()=>{} )()  }, [] )
  useEffect( ()=>{
    ( async ()=>{
      const response = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters")

      const personajes = (await response.json())
                            .map(personaje => {
                                  return {
                                    id:personaje.id, 
                                    name:personaje.name
                                  }
                                })
      setPersonajes(personajes)
    } )()
  }, [] )

  const handleChange = async ev => {
    const value = ev.target.value
    if(value === "new"){
      setPersonaje("new")
    }else{
      const response = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters/"+value)
      const personaje = await response.json()
      setPersonaje(personaje)
    }
  }

  return (
    <form>
      <div className="campo">
        <label htmlFor="id">Accion</label>
        <select name="id" id="id" onChange={handleChange}>
          <option value="new">Crear</option>
          { 
            personajes && personajes.map(p=>{
              return <option key={p.id}>{p.name}</option>
            })
          }
        </select>
      </div>

      <FormInput labelText="Nombre" 
        id="name" name="name" 
      />
      
      <FormInput labelText="Especie" 
        id="specie" name="specie" 
      />

      <FormInput labelText="Transformacion" 
        id="transform" name="transform" 
      />

      <FormInput labelText="Role" 
        id="role" name="role" 
      />

      <FormInput labelText="Estado" 
        id="status" name="status" 
      />

      <FormInput labelText="Universo" 
        id="universe" name="universe" 
      />

      <FormInput labelText="Planeta de Origen" 
        id="originplanet" name="originplanet" 
      />

      <button type="submit">Crear</button>
    </form>
  )
}

const App = props => {

  return (
      <>
        <FormPersonaje/>
      </>
  )
}

export default App;

/*
const video = document.querySelector("video")
video.playbackRate = 1.5
*/