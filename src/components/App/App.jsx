import React, { useState, useEffect } from 'react';
import FormulaireMedecin from "../Formulaire/FormulaireMedecin"
import Api from '../../api'

// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = (props) => {
  
  return (
    <div>
      <FormulaireMedecin ajouterMedecin={props.ajouterMedecin}
              nouveauNom={props.nouveauNom} nouveauPrenom={props.nouveauPrenom}
              nouveauInami={props.nouveauInami} nouveauTelephone={props.nouveauTelephone}
              nouveauMail={props.nouveauMail} nouveauRue={props.nouveauRue} nouveauVille={props.nouveauVille}
              nouveauCodePostal={props.nouveauCodePostal} changementNom={props.changementNom}
              changementPrenom={props.changementPrenom} changementInami={props.changementInami}
              changementTelephone={props.changementTelephone} changementMail={props.changementMail}
              changementRue={props.changementRue} changementVille={props.changementVille} changementCodePostal={props.changementCodePostal} />
    </div>
  )
}

export default App;
