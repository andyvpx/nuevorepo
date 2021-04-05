import React, {Fragment} from 'react';
import logo from '../../../img/icon-blanco.png';
import '../index.css';

const Informacion = () => {
    return ( 
        <Fragment>
            <div className="caja-logo">
            <img src={logo} alt="Logo información" className="logo-info"/>
            <h1 className="titulo-proyecto">PROYECTO MÚSICA</h1>
            </div>

            <p className="texto">EXPLORA, INFORMATE Y CONOCE TODO SOBRE LA INDUSTRIA MUSICAL</p>
        </Fragment>
     );
}
 
export default Informacion;