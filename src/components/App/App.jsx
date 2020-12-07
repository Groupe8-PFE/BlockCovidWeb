import React from 'react';
import {
  Switch, Route
} from "react-router-dom"

import FormulaireMedecin from "../Formulaire/FormulaireMedecin"
import Menu from "../Menu/Menu"
import Connexion from "../Formulaire/FormulaireConnexion"
import AccueilMedecin from "../Accueil/AccueilMedecin"

// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {

  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/accueil/medecin">
          <AccueilMedecin />
        </Route>
        <Route path="/inscription">
          <FormulaireMedecin />
        </Route>
        <Route path="/">
          <Connexion />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
