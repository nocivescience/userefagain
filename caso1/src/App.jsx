import { useState, useRef, useEffect, useCallback } from 'react'
function App(){
  const [value,setValue]=useState('')
  const nombre = useRef('Ricardo')
  const cambioNombre=()=>{
    nombre.current='Andres'
    console.log(`tu nombre es ${nombre.current}`)
  }
  return (
    <>
    <h1>contador: {value}</h1>
    <button onClick={()=>setValue(value+3)}>sumele</button>
    <br/>
    <h1>nombre: {nombre.current}</h1>
    <button onClick={cambioNombre}>clikchere</button>
    </>
  )
}
export default App;