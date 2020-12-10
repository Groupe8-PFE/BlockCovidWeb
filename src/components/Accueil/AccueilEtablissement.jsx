import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import FormulaireLieu from "../Formulaire/FormulaireLieu"
import BlockCovidContext from "../../contexts/BlockCovidContext";
import LieuxList from "../LieuList/LieuxList";

const AccueilEtablissement = (props) => {
  const { etablissement } = useContext(BlockCovidContext);
  const token = localStorage.getItem("token");
  console.log("Props lieu", props.lieux)
  if (token) {
    console.log("coucou")
    return (
      <div>
        <div class="text-center">
          <h1> Bienvenue sur la page d'accueil de l'établissement </h1>
          <h3>Salut {etablissement.nom_etablissement}, Ravie de te revoir !</h3>
        </div>
        <div>
          <LieuxList lieux={props.lieux}></LieuxList>
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