import React, {useContext} from "react";
import { Redirect } from "react-router-dom";

import BlockCovidContext from "../../contexts/BlockCovidContext";



const AccueilMedecin = () => {

  const { seDeconnecter, token, medecin } = useContext(BlockCovidContext);
  console.log("Medecin : ", medecin)
  console.log("Token : ", token)
  if(token) {
    return (
      <div>
        <h1> Bienvenue sur la page d'accueil pour medecin </h1>
        <h3>Bienvenue Zebi</h3>
        <button onClick={seDeconnecter}> Se deconnecter </button>
      </div>
    );
  }
  return(
    <div>
      <Redirect to="/"/>
    </div>
  )
};

export default AccueilMedecin;
