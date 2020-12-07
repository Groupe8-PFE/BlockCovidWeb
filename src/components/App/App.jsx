import React from 'react';
import {
  Switch, Route
} from "react-router-dom"

import FormulaireMedecin from "../Formulaire/FormulaireMedecin"
import Menu from "../Menu/Menu"
import Connexion from "../Formulaire/FormulaireConnexion"
import Accueil from '../Accueil/Accueil';


// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {
  
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/connexion">
          <Connexion />
        </Route>
        <Route path="/inscription">
          <FormulaireMedecin />
        </Route>
        <Route path="/">
          <Accueil />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
