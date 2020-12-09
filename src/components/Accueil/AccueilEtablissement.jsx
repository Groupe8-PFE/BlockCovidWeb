import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import LieuxList from "../LieuList/LieuxList";

const AccueilEtablissement = () => {
  const { seDeconnecter, etablissement, lieux, recevoirLieux } = useContext(
    BlockCovidContext
  );
  const token = localStorage.getItem("token");
  if (token) {
    recevoirLieux(etablissement.id);
    return (
      <div>
        <h1> Bienvenue sur la page d'accueil de l'établissement </h1>
        <LieuxList lieux={lieux}></LieuxList>
        <button onClick={seDeconnecter}> Se deconnecter </button>
      </div>
    );
  }
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

export default AccueilEtablissement;
