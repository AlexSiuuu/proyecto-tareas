const Signup = () => {
    return <div>
        <div className="img">

<div className="contenedor">

    <div className="formulario-registro">

        <form name="form">
        
            <h1 className='titulo-login'>Registrate</h1><br />

            <label className='nombre-usuario'>Ingrese su Nombre:</label>
            <input name="nombre" className='campo-usuario' type="text"/><br />
                            
            <label className='nombre-usuario'>Nombre de Usuario:</label>
            <input name='usuario' className='campo-usuario' type="text" /><br />

            <label className='nombre-usuario'>Ingrese su Correo:</label>
            <input name="correo" className='campo-usuario' type="text"/><br />
                            
            <label className='nombre-usuario'>Ingrese Contraseña:</label>
            <input name="password" className='campo-usuario' type="password" /><br />

            <center><button type="submit" className='boton-login'>Registrarme</button></center>

        </form>
    </div>

</div>



</div>

<script src="../js"></script>

    </div>;
}

export default Signup