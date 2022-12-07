import axios from "axios"
import { useState } from "react"
import "./Login.css"
const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
      })

      //email:eve.holt@reqres.in
      //password: cityslicka

      const submit = (e) => {
        e.preventDefault()
        console.log(user)
        axios.post(`https://reqres.in/api/login`,user).
        then(data => { localStorage.setItem("tokenEDmarket",data.data.token)
        })
      }

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={ submit }>
                <div className="field">
                    <label htmlFor="email"> Correo Electronico</label>
                    < input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    < input required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
        </div>
    )
}

export default Login
