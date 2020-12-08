import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import webService from "../services/webServices";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [medecins, setMedecins] = useState([]);
  const [etablissements, setEtablissements] = useState([]);
  const [nouveauNom, setNouveauNom] = useState("");
  const [nouveauNomEtablissement, setNouveauNomEtablissement] = useState("");
  const [nouveauPrenom, setNouveauPrenom] = useState("");
  const [nouveauInami, setNouveauInami] = useState("");
  const [nouveauTelephone, setNouveauTelephone] = useState("");
  const [nouveauEmail, setNouveauEmail] = useState("");
  const [nouveauEmailEtablissement, setNouveauEmailEtablissement] = useState("");
  const [nouveauMotDePasse, setNouveauMotDePasse] = useState("");
  const [
    nouveauMotDePasseEtablissement,
    setNouveauMotDePasseEtablissement,
  ] = useState("");
  const [nouveauRue, setNouveauRue] = useState("");
  const [nouveauRueEtablissement, setNouveauRueEtablissement] = useState("");
  const [nouveauVille, setNouveauVille] = useState("");
  const [nouveauVilleEtablissement, setNouveauVilleEtablissement] = useState("");
  const [nouveauCodePostal, setNouveauCodePostal] = useState("");
  const [
    nouveauCodePostalEtablissement,
    setNouveauCodePostalEtablissement,
  ] = useState("");
  const history = useHistory();

  const ajouterMedecin = (event) => {
    event.preventDefault();
    const medecinObjet = {
      nom: nouveauNom,
      prenom: nouveauPrenom,
      inami: nouveauInami,
      telephone: nouveauTelephone,
      email: nouveauEmail,
      password: nouveauMotDePasse,
      rue: nouveauRue,
      ville: nouveauVille,
      codePostal: nouveauCodePostal,
    };

    //eslint-disable-next-line
    console.log(medecinObjet);
    webService
      .creeMedecin(medecinObjet)
      .then((medecinRenvoye) => {
        setMedecins(medecins.concat(medecinRenvoye));
        setNouveauNom("");
        setNouveauPrenom("");
        setNouveauInami("");
        setNouveauTelephone("");
        setNouveauEmail("");
        setNouveauMotDePasse("");
        setNouveauRue("");
        setNouveauVille("");
        setNouveauCodePostal("");
        history.push("/");
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const ajouterEtablissement = (event) => {
    event.preventDefault();
    const EtablissementObjet = {
      nom_etablissement: nouveauNomEtablissement,
      email: nouveauEmailEtablissement,
      motDePasse: nouveauMotDePasseEtablissement,
      rue: nouveauRueEtablissement,
      ville: nouveauVilleEtablissement,
      codePostal: nouveauCodePostalEtablissement,
    };

    console.log(EtablissementObjet);
    webService
      .creeEtablissement(EtablissementObjet)
      .then((etablissementRenvoye) => {
        setEtablissements(etablissements.concat(etablissementRenvoye));
        setNouveauNomEtablissement("");
        setNouveauEmailEtablissement("");
        setNouveauMotDePasseEtablissement("");
        setNouveauRueEtablissement("");
        setNouveauVilleEtablissement("");
        setNouveauCodePostalEtablissement("");
        history.push("/accueil/etablissement");
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const seConnecter = (event) => {
    event.preventDefault();
    const connexionObjet = {
      email: nouveauEmail,
      password: nouveauMotDePasse,
    };

    console.log(connexionObjet);
    webService
      .seConnecter(connexionObjet)
      .then((response) => {
        setNouveauEmail("")
        setNouveauMotDePasse("")
        localStorage.setItem("token", 'Bearer ' + JSON.stringify(response.data))
        history.push("/accueil/medecin")
      })
      .catch((error) => {
        console.warn(error);
        history.push("/");
      });
  };

  const sInscrire = (event) => {
    event.preventDefault();
    history.push("/inscription");
  };

  const changementNom = (e) => {
    setNouveauNom(e.target.value);
  };

  const changementNomEtablissement = (e) => {
    setNouveauNomEtablissement(e.target.value);
  };

  const changementPrenom = (e) => {
    setNouveauPrenom(e.target.value);
  };

  const changementInami = (e) => {
    setNouveauInami(e.target.value);
  };

  const changementTelephone = (e) => {
    setNouveauTelephone(e.target.value);
  };

  const changementEmail = (e) => {
    setNouveauEmail(e.target.value);
  };

  const changementEmailEtablissement = (e) => {
    setNouveauEmailEtablissement(e.target.value);
  };

  const changementMotDePasse = (e) => {
    setNouveauMotDePasse(e.target.value);
  };

  const changementMotDePasseEtablissement = (e) => {
    setNouveauMotDePasseEtablissement(e.target.value);
  };

  const changementRue = (e) => {
    setNouveauRue(e.target.value);
  };

  const changementRueEtablissement = (e) => {
    setNouveauRueEtablissement(e.target.value);
  };

  const changementVille = (e) => {
    setNouveauVille(e.target.value);
  };

  const changementVilleEtablissement = (e) => {
    setNouveauVilleEtablissement(e.target.value);
  };

  const changementCodePostal = (e) => {
    setNouveauCodePostal(e.target.value);
  };

  const changementCodePostalEtablissement = (e) => {
    setNouveauCodePostalEtablissement(e.target.value);
  };

  /**useEffect(() => {
    console.log("effect");
    webService.tousMedecins().then((initialiserMedecins) => {
      console.log("promesse remplie");
      setMedecins(initialiserMedecins);
    });
  }, []);*/

  console.log("rendues ", medecins.length, " medecins");

  const exposedValue = {
    medecins,
    nouveauNom,
    nouveauNomEtablissement,
    nouveauPrenom,
    nouveauInami,
    nouveauTelephone,
    nouveauEmail,
    nouveauEmailEtablissement,
    nouveauMotDePasse,
    nouveauMotDePasseEtablissement,
    nouveauRue,
    nouveauRueEtablissement,
    nouveauVille,
    nouveauVilleEtablissement,
    nouveauCodePostal,
    nouveauCodePostalEtablissement,
    ajouterMedecin,
    seConnecter,
    sInscrire,
    ajouterEtablissement,
    changementNom,
    changementNomEtablissement,
    changementPrenom,
    changementInami,
    changementTelephone,
    changementEmail,
    changementEmailEtablissement,
    changementMotDePasse,
    changementMotDePasseEtablissement,
    changementRue,
    changementRueEtablissement,
    changementVille,
    changementVilleEtablissement,
    changementCodePostal,
    changementCodePostalEtablissement,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };

export default Context;
