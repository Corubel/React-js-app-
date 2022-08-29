import {useState} from 'react'
//let contador = 0

function Contador (props){
	/*
	const estado = useState(0)
	const contador = estado[0]
	const setContador = estado[1]
	*/
	const [contador, setContador] = useState(0)

	const handleClickSuma = ()=>{
		setContador( contador+1 )//1
	}

	const handleClickResta = ()=>{
		if(contador >0)
			setContador( contador-1 )//1
	}

	return(
		<div style={{heigth: "300px", width: "250px"}} className="p-4">
			<h3 className="ta-center">{contador}</h3>
			<div>
				<button onClick={handleClickResta}>-</button>
				<button onClick={handleClickSuma}>+</button>
			</div>
		</div>
	)
}

export default Contador