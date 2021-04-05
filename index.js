//       [ Librerias ]       
import React, {useState, useContext} from 'react';
import { useLocation } from 'wouter';
import { UserContext } from '../../../context/UserContext';

//       [ API ]       
import GoogleLogin from 'react-google-login';

//       [ Estilos ]       
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import '../index.css';
import logo from '../../../img/logo.png';

//       [ Estilos ]       
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
    linea: {
        width: 360,
        height: 1,
        backgroundColor: '#707070',
        marginBottom: 30
    }
  }));


const Formulario = () => {
    //       [ Estilos ]       
    const clases = useStyles();    

    //       [ Estados Formulario ]       
    const [nombre, setNombre] = useState('');
    const [correoelec, setCorreoelec] = useState('')
    const [contraseña, setContraseña] = useState('');

    
    //       [ useLocation ]     
    const [, navigate] = useLocation();    

    //       [ Extraer valores del context ]     
    const { setUsername, setUsernameAPI, setCorreo, setFotoPerfil, details, setDetails } = useContext(UserContext);

    //       [ onClick datos formulario ]     
    const handleSubmit = e => {
        e.preventDefault();
        setUsername(nombre);
        setCorreo(correoelec);
        navigate('/inicio');
    }

    /* [ Google API ] */
    const responseGoogle = (response) => {
        setUsernameAPI(response.Rs.BT); 
        setFotoPerfil(response.profileObj.imageUrl);
        setCorreo(response.Rs.At);
        navigate('/inicio')
      }

      // profileObj.imageUrl

      ////////////////////////////////////////////////////////////////////////////////////////////////

      const adminUser = [
        {
        name: 'Admin',
        email: 'admi@admi.com',
        password: 'admi123'
       },
       {
        name: 'Pepe',
        email: 'pepe@pepe.com',
        password: 'pepe'       
       },
       {
        name: 'Consola',
        email: 'consola1@gmail.com',
        password: 'consola123'       
       },
       {
        name: 'Path',
        email: 'path@gmail.com',
        password: 'path'       
       },
       {
        name: 'React',
        email: 'react222@hotmail.com',
        password: '25423'       
       }
    ]

      console.log(adminUser);

      const [error, setError] = useState("");

      const Logout = () => {
        setDetails({ name: "", email: "", password: ""});
      };

      const submitHandler = e => {
        e.preventDefault();
        
        if(
          (details.email === adminUser[0].email && details.password === adminUser[0].password) || 
          (details.email === adminUser[1].email && details.password === adminUser[1].password) ||
          (details.email === adminUser[2].email && details.password === adminUser[2].password) ||
          (details.email === adminUser[3].email && details.password === adminUser[3].password) ||
          (details.email === adminUser[4].email && details.password === adminUser[4].password) 
        ) {
          navigate('/inicio')
        } else{
          console.log("Details do not match!");
          setError("ERROR!"); 
        }

        
      };

    return ( 
        <form className={clases.root} noValidate autoComplete="off">
        <img src={logo} alt="Logo App" className="logo"/>   
        {error != "" ? <div className="error">{error}</div> : ""}

        <h1 className="sesion">Iniciar Sesión</h1>
        <div className={clases.linea}/>
        <TextField 
            id="outlined-basic"
            label="Nombre de usuario" 
            variant="outlined" 
            type="name"
            name="nombre"
            onChange={e => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            />
        <TextField 
            id="outlined-basic"
            label="Correo electrónico" 
            variant="outlined" 
            type="email"
            name="correo"
            onChange={e => setDetails({ ...details, email: e.target.value })}
            value={details.email}
        />
        <TextField 
            id="filled-password-input"
            label="Contraseña" 
            type="password"
            autoComplete="current-password"
            variant="outlined" 
            nombre="contraseña"
            onChange={e => setDetails({ ...details, password: e.target.value })}
            value={details.password}
            />
        <Button 
            id="Uno" 
            className="ButtonUno large"  
            variant="contained" 
            color="primary"  
            endIcon={<InputIcon />}
            onClick={submitHandler}
        > 
            INGRESAR 
        </Button>
        <GoogleLogin
            clientId="922231217950-s62rlqpefpfhg0b7f0h4idb2i6a7ad83.apps.googleusercontent.com"
            className="ButtonDos" 
            buttonText="Continuar con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />            

    </form> 
     );
}
 
export default Formulario;