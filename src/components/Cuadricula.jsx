
import usePetition from "../hooks/usePetition"
import Crypto from "./cripto/Cripto"
import "./Cuadricula.css"

function Cuadricula() {

  const criptos = usePetition("assets")

  if (!criptos) return <samp>Cargando...</samp>

  return (
    <div className="app-container">
       <h1>Lista de criptomoneda</h1>
        <div className="criptor-container">
         {
            criptos.map(({id,name,priceUsd,symbol,changePercent24Hr}) => ( 
              <Crypto key={id} name={name} priceUSD={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} id={id} />
              )
            )
         }
        </div>
    </div>
  )
}

export default Cuadricula
