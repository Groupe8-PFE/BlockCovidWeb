import React, {useContext} from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";


const AccueilMedecin = () => {
  const {seDeconnecter} = useContext(BlockCovidContext);
  return (
    <div>
      <h1> Bienvenue sur la page d'accueil pour medecin </h1>
      <button onClick={seDeconnecter}> Se deconnecter </button>
    </div>
  );
};

export default AccueilMedecin;
