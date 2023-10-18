import { Component } from "react"
import axios from "axios"

const url = "http://localhost:3000/usuarios"

class Login extends Component {

    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    iniciarSesion = async () => {
        await axios.get(url, {params: {nombreUsuario: this.state.form.username, password: this.state.form.password}})
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render () {
    return <div>
        <div className="img">

            <div className="contenedor">

                <div className="formulario">

                    <form name="form">
                    
                        <h1 className='titulo-login'>Entrar</h1><br /><br />
                                        
                        <label className='nombre-usuario'>Nombre de Usuario:</label><br />
                        <input onChange={this.handleChange} className='campo-usuario' name="username" type="text"/><br /><br />
                                        
                        <label className='nombre-usuario'>Ingrese Contraseña:</label><br />
                        <input onChange={this.handleChange} className='campo-usuario' name="password" type="password"/><br /><br />

                        <center><button onClick={()=> this.iniciarSesion()} className='boton-login'>Ingresar</button></center>

                    </form>
                </div>

            </div>

        </div>

    </div>;
}
}

export default Login