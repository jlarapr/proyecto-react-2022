import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Hola, bienvenido a EDmarket</h1>
            <p>Conoce las 100 cripots mas usadas</p>
            <Link to="/criptomonedas">Ver Criptomonedas</Link>
        </>
    )
}

export default Home
