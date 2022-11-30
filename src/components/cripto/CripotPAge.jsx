import axios from "axios"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./CriptoPage.css"

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const params  = useParams()
    const [criptos,setCripto] = useState({})
    const [history,setHistory] = useState([])

    useEffect(() => {

        axios.get(`${API_URL}assets/${params.id}`)
          .then((data) => {
            setCripto(data.data.data)
          })
        .catch(e => console.error(e))
      },[])

      useEffect(() => {

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
          .then((data) => {
            setHistory(data.data.data)
          })
        .catch(e => console.error(e))
      },[])


      if (!criptos) return <samp>Cargando...</samp>

    return(
        <>
            <h1>{params.id}</h1>
            <div className="cripto-page-container">
                <span>Name: {criptos.name} </span>
                <span>Sinbolo: {criptos.symbol} </span>
            </div>
            <br/>
            <h1>History</h1>
            {/* <span>{JSON.stringify(history)}</span>  */}
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({date,priceUsd,time}) => (
                            <tr key={time}>
                                <td>{dayjs(date).format('MM-DD-YYYY') }</td>
                                <td>{parseFloat(priceUsd).toFixed(4)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CriptoPage