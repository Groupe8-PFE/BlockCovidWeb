import React from "react";
import { Switch, Route } from "react-router-dom";

import FormulaireInscription from "../Formulaire/FormulaireInscription";
import Menu from "../Menu/Menu";
import FormulaireConnexion from "../Formulaire/FormulaireConnexion";
import AccueilEtablissement from "../Accueil/AccueilEtablissement";
import AccueilMedecinController from "../Accueil/AccueilMedecinController";
import QRCode from "../QRCode/QRCode"

// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/inscription">
          <FormulaireInscription />
        </Route>
        <Route path="/accueil/medecin">
          <AccueilMedecinController />
        </Route>
        <Route path="/accueil/etablissement">
          <AccueilEtablissement />
        </Route>
        <Route path="/qrcode">
          <QRCode />
        </Route>
        <Route path="/">
          <FormulaireConnexion />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
