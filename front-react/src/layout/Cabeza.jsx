import { Outlet, Link } from "react-router-dom";

const  Cabeza = () => {
    return<>
    <header>
        <nav className="navegador-principal">
            <ul>
                <li>
                    <Link to="/" className="link">Inicio</Link>
                </li>
                <li>
                    <Link to="/signup" className="link">Registro</Link>
                </li>
            </ul>
        </nav>    
    </header>
     <Outlet />
    </>
}

export default Cabeza;