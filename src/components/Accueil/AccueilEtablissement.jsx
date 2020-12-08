import React, {useContext} from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";



const AccueilEtablissement = () => {
  const { seDeconnecter, token } = useContext(BlockCovidContext);

  return (
    <div>
      <h1> Bienvenue sur la page d'accueil de l'établissement </h1>
      <button onClick={seDeconnecter}> Se deconnecter </button>
    </div>
  );
};

export default AccueilEtablissement;
