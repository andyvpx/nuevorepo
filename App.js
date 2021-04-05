import React from 'react';
import { Route, Switch} from 'wouter';

import Login from './components/Login/LoginContainer';
import Principal from './components/Principal/PrincipalContainer';
import UserContextProvider from './context/UserContext';
import TrendingsProvider from './context/TrendingsContext';

import "./video.css";

const App = () => {

  return(
      <UserContextProvider>
      <TrendingsProvider>
      <Switch>  
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/inicio">
          <Principal/>
        </Route>
      </Switch>
      </TrendingsProvider>
    </UserContextProvider>
  )
}


export default App;

