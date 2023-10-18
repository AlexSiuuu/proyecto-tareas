import axios from "axios"
import { Component } from "react";

const url = "http://localhost:3000/usuarios"

class Signup extends Component {

    state = {
        data:[],
        form:{
            nombre:"",
            usuario:"",
            correo:"",
            password:""
        }
    }

    peticionPost = async () => {
        // eslint-disable-next-line no-unused-vars
        await axios.post(url,this.state.form).then(response => {

        }).catch(err => {
            console.log(err.message)
        })
    }

    handleChange = async e => {
        e.persist()
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    render () {
        const {form} = this.state
    return (<div>
        <div className="img">

            <div className="contenedor">

                <div className="formulario-registro">

                    <form name="form">
        
                    <h1 className='titulo-login'>Registrate</h1><br />

                    <label className='nombre-usuario'>Ingrese su Nombre:</label>
                    <input value = {form.nombre} onChange={this.handleChange} name="nombre" className='campo-usuario' type="text"/><br />
                                    
                    <label className='nombre-usuario'>Nombre de Usuario:</label>
                    <input value = {form.usuario} onChange={this.handleChange} name='usuario' className='campo-usuario' type="text" /><br />

                    <label className='nombre-usuario'>Ingrese su Correo:</label>
                    <input value = {form.correo} onChange={this.handleChange} name="correo" className='campo-usuario' type="text"/><br />
                                    
                    <label className='nombre-usuario'>Ingrese Contraseña:</label>
                    <input value = {form.password} onChange={this.handleChange} name="password" className='campo-usuario' type="password" /><br />

                    <center><button onClick={()=>this.peticionPost()} type="submit" className='boton-login'>Registrarme</button></center>

                </form>
            </div>

        </div>

    </div>

</div>
    )
}
}

export default Signup