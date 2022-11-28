import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos,setCripto] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCripto(data.data.data)
      })
    .catch(() => {
      console.error("La peticion fallo")
    })
  },[])

  // useEffect(() => {
  //   fetch(`${API_URL}assets`)
  //   .then((resp) => resp.json())
  //     .then((data) => {
  //       setCripto(data.data)
  //     })
  //   .catch(() => {
  //     console.error("La peticion fallo")
  //   })
  // },[])

  if (!criptos) return <samp>Cargando...</samp>

  return (
        <>
            <h1>Lista de criptomoneda</h1>
            <ol>
              { 
                  criptos.map(({id, name, priceUsd}) => (
                  <li key={id} >Nombre: {name} Presios {priceUsd}</li>
                ))
              }
            </ol>
        </>
      )
}

export default App
