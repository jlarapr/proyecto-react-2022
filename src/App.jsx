
import axios from "axios"
import { useEffect, useState } from "react"
import Crypto from "./components/cripto/Cripto"
import "./App.css"

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
    <div className="app-container">
       <h1>Lista de criptomoneda</h1>
        <div className="criptor-container">
         {
            criptos.map(({id,name,priceUsd,symbol,changePercent24Hr}) =>(
              <Crypto key={id} name={name} priceUSD={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} />
              
            )  )
        
         }
        </div>
    </div>
     )
}

export default App
