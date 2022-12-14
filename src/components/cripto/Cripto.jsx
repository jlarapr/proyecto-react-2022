//import axios from "axios"
//import { useEffect, useState } from "react"
//import { Panel } from 'primereact/panel';
//import stylesModule from '../paneldemo.module.css'
import { Link } from "react-router-dom"
import "./Cripto.css"
const Cripto = ({id, name,priceUSD,symbol,changePercent24Hr}) => {
   

return (    
          <Link to={`/criptomonedas/${id}`}>
            <div className="cripto">
              <h2>{name}</h2>
              <div className="info">
                <p><span className="label">Presio: </span>{parseFloat(priceUSD).toFixed(4)}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p>
                    <span className="label">Variacion 24hrs: </span>
                    <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo" } >{parseFloat(changePercent24Hr).toFixed(3)}% </span>
                </p>
                
              </div>
            </div>
          </Link>
    )
}

export default Cripto
