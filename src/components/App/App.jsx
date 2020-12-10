import React from "react";
import { Switch, Route } from "react-router-dom";

import FormulaireInscription from "../Formulaire/FormulaireInscription";
import Menu from "../Menu/Menu";
import FormulaireConnexion from "../Formulaire/FormulaireConnexion";
import AccueilMedecinContainer from "../Accueil/AccueilMedecinContainer";
import QRCode from "../QRCode/QRCode"
import AccueilEtablissementContainer from "../Accueil/AccueilEtablissementContainer";
import FormulaireLieu from "../Formulaire/FormulaireLieu";

// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {
  console.log("boucle infinie route")
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/inscription">
          <FormulaireInscription />
        </Route>
        <Route path="/accueil/medecin">
          <AccueilMedecinContainer />
        </Route>
        <Route path="/accueil/etablissement">
          <AccueilEtablissementContainer />
        </Route>
        <Route path="/qrcode">
          <QRCode />
        </Route>
        <Route path="/ajouterLieu">
          <FormulaireLieu />
        </Route>
        <Route path="/">
          <FormulaireConnexion />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
