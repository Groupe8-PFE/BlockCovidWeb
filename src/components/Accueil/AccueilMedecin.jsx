import React, {useContext} from "react";
import { Redirect } from "react-router-dom";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import webServices from "../../services/webServices"



const AccueilMedecin = () => {

  const { seDeconnecter,  medecin } = useContext(BlockCovidContext);
  const token = localStorage.getItem('token')
  let QR = null
  webServices.recevoirQRCode(medecin.id)
  .then((response => {
    console.log("Response :", response)
    const QRCodeRenvoye = {
      id: response.medecin.id,
      QRCode: response.svg
    }
    QR = 1
    console.log(QR)
  }))

  console.log("Medecin : ", medecin)
  console.log("Token : ", token)
  //console.log("QR Code : ",QR)
  if(token) {
    return (
      <div>
        <h1> Bienvenue sur la page d'accueil pour medecin </h1>
        <h3>Bienvenue {medecin.nom} {medecin.prenom} </h3>
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
