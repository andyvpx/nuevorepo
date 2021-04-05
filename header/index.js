import React, {useContext, useState} from 'react';
import { UserContext } from '../../../context/UserContext';
import Busqueda from "../busqueda/index";
import { useLocation } from 'wouter';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '../Principal.css';
import { makeStyles } from '@material-ui/core/styles';

// Imagenes
import userfoto from '../../../img/usuario.png';
import iconblanco from '../../../img/icon-blanco.png';

/* BORDES Y POSICION DEL MENU */
const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
    fondo: {
      background: 'black'
    }
  
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  //       [ Estilos ]       
const useStyles = makeStyles((theme) => ({

  fondo: {
    background: 'black'
  }
}));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }))(MenuItem);

  
const Header = () => {
    const clases = useStyles();
      //       [ useLocation ]     
      const [, navigate] = useLocation();    

    //const isLogged = false;
    const { usernameAPI, setUsernameAPI, fotoPerfil, setFotoPerfil, details, setDetails} = useContext(UserContext);

    /*
            <header className="gf-header">
                {
                    username === ''
                    ? <h1>{usernameAPI}</h1>
                    : <h1>{username}</h1>
                }
                
            <Link to='/'>
                Cerrar sesión
            </Link>
        </header>
    */

        const handleSesion = () => {
          setUsernameAPI('');
          setFotoPerfil('');
          setDetails({name: '', email: '', password: ''})
          navigate('/');
        };

        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
            setAnchorEl(null);
        };

    return ( 
        <div>

        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
        >  
        {
          fotoPerfil === ''
          ? <img src={userfoto} alt="" className="FotoUsuario" />
          : <img src={fotoPerfil} alt="" className="FotoUsuarioApi" />
        }
            
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              className="BotonPrincipal"
              id="BotonPrincipal"
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="primary"
              variant="contained"
              onClick={handleClick}
            > 
            
            {details.name} {usernameAPI}
            
            </Button>
            
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
              <StyledMenuItem>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={handleSesion}>
                    Cerrar sesión
              </ListItemText>
                </StyledMenuItem>
              </StyledMenu>
            <Busqueda />
            <Tab id="NombreTab" label="Inicio" />
            <Tab id="NombreTab" label="Top" />
            <Tab id="NombreTab" label="Hits" />
            <Tab id="NombreTab"label="News" />
            <Tab id="NombreTab" label="Newsletter" />
            <img src={iconblanco} id="FotoPrincipal" alt=""/>
        </Tabs>

      </div>
     );
}
 
export default Header;