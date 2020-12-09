import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormulaireLieu from "../Formulaire/FormulaireLieu"
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
        <div className="container" id="container">
          <LieuxList lieux={lieux}></LieuxList>
          <FormulaireLieu></FormulaireLieu>
          <p></p>
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

export default AccueilEtablissement;