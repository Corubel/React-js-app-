import {useState, useEffect} from 'react'

const ComponenteFuncion = (props)=>{
	const [personaje, setPersonaje] = useState(null)

	//useEffect( callbackSincronico, [dependencias] )
	useEffect( ()=>{
		const funcion = async ()=> {
			console.log("El componente se montó")
		    const response = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters/Gohan")
		    const personaje = await response.json()
		    setPersonaje(personaje)
		}
		funcion()
	}, [] )


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

export default ComponenteFuncion