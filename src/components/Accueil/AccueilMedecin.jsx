import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import BlockCovidContext from "../../contexts/BlockCovidContext";

const AccueilMedecin = (props) => {
  const { seDeconnecter, medecin } = useContext(BlockCovidContext);
  const token = localStorage.getItem("token");

  //console.log("Medecin : ", medecin);
  //console.log("Token : ", token);
  //console.log("QR Code Accueil : ", props.QRCode.QRCode);
  if (token) {
    const base64data = btoa(unescape(encodeURIComponent(props.QRCode.QRCode)));
    return (
      <div>
        <div>
          <h1> Bienvenue sur la page d'accueil pour medecin </h1>
          <h3>
            Bienvenue {medecin.nom} {medecin.prenom}{" "}
          </h3>
        </div>
        <div>
          <img src={`data:image/svg+xml;base64,${base64data}`} alt="" />
          <br />
        </div>
        <div>
          <button onClick={seDeconnecter}> Se deconnecter </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

export default AccueilMedecin;
