import React from "react";
import { Switch, Route } from "react-router-dom";

import FormulaireInscription from "../Formulaire/FormulaireInscription";
import Menu from "../Menu/Menu";
import FormulaireConnexion from "../Formulaire/FormulaireConnexion";
import AccueilMedecin from "../Accueil/AccueilMedecin";
import AccueilEtablissement from "../Accueil/AccueilEtablissement";
import webService from "../../services/webServices";

// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {
  const token = webService.recupererTokenCourant()
  if (token === null) {
    return (
      <div>
        <Menu />
        <FormulaireConnexion />
      </div>
    )
  }
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/inscription">
          <FormulaireInscription />
        </Route>
        <Route path="/accueil/medecin">
          <AccueilMedecin />
        </Route>
        <Route path="/accueil/etablissement">
          <AccueilEtablissement />
        </Route>
        <Route path="/">
          <FormulaireConnexion />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
