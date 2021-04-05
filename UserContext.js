import React, {createContext, useState} from 'react';

//       [ Crear el context ]       
export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    //       [ State del provider ]  
    const [usernameAPI, setUsernameAPI] = useState('');
    const [correo, setCorreo] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState('');

    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
      });

    return ( 
        <UserContext.Provider 
            value={{
                usernameAPI,
                correo,
                fotoPerfil,
                details,
                setUsernameAPI,
                setCorreo,
                setFotoPerfil,
                setDetails
            }}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;