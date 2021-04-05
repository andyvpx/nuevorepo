import React from 'react';
import Formulario from './formulario/index';
import Informacion from './informacion/index';
import notas from '../../img/notas.png';
import './index.css';

const LoginContainer = () => {

    return ( 
    <div className="container">
        <div className="container2">
          <div className="container3">
            <div>
              <img src={notas} alt="" className="notas-info"/>
              <div className="info-login">
                <Informacion/>
              </div>
              <div className="signin-signup">
              <Formulario />
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default LoginContainer;