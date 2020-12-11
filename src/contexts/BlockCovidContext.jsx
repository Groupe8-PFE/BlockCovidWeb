import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import webService from "../services/webServices";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [medecin, setMedecin] = useState("");
  const [medecins, setMedecins] = useState([]);
  const [etablissements, setEtablissements] = useState([]);
  const [etablissement, setEtablissement] = useState("");
  const [QRCode, setQRCode] = useState("");
  const [nouveauNom, setNouveauNom] = useState("");
  const [nouveauNomEtablissement, setNouveauNomEtablissement] = useState("");
  const [nouveauPrenom, setNouveauPrenom] = useState("");
  const [nouveauInami, setNouveauInami] = useState("");
  const [nouveauTelephone, setNouveauTelephone] = useState("");
  const [
    nouveauTelephoneEtablissement,
    setNouveauTelephoneEtablissement,
  ] = useState("");
  const [nouveauEmail, setNouveauEmail] = useState("");
  const [nouveauEmailEtablissement, setNouveauEmailEtablissement] = useState(
    ""
  );
  const [nouveauMotDePasse, setNouveauMotDePasse] = useState("");
  const [
    nouveauMotDePasseEtablissement,
    setNouveauMotDePasseEtablissement,
  ] = useState("");
  const [nouveauRue, setNouveauRue] = useState("");
  const [nouveauRueEtablissement, setNouveauRueEtablissement] = useState("");
  const [nouveauVille, setNouveauVille] = useState("");
  const [nouveauVilleEtablissement, setNouveauVilleEtablissement] = useState(
    ""
  );
  const [nouveauCodePostal, setNouveauCodePostal] = useState("");
  const [
    nouveauCodePostalEtablissement,
    setNouveauCodePostalEtablissement,
  ] = useState("");
  const [nouveauDescription, setNouveauDescription] = useState("");
  const [typeConnexion, setTypeConnexion] = useState("medecin");
  const history = useHistory();
  const token = localStorage.getItem("token");

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
        history.push("/accueil/medecin");
      })
      .catch((error) => {});
  };

  const ajouterEtablissement = (event) => {
    event.preventDefault();
    const EtablissementObjet = {
      nom_etablissement: nouveauNomEtablissement,
      rue: nouveauRueEtablissement,
      ville: nouveauVilleEtablissement,
      code_postal: nouveauCodePostalEtablissement,
      email: nouveauEmailEtablissement,
      password: nouveauMotDePasseEtablissement,
    };
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
      .catch((error) => {});
  };

  const seConnecter = (event) => {
    event.preventDefault();
    const connexionObjet = {
      email: nouveauEmail,
      password: nouveauMotDePasse,
    };
    webService
      .seConnecter(connexionObjet, typeConnexion)
      .then((response) => {
        setNouveauEmail("");
        setNouveauMotDePasse("");
        if (response.token) {
          localStorage.setItem("token", "Bearer " + response.token);
          if (typeConnexion === "medecin") {
            history.push("/accueil/medecin");
            window.location.reload();
          } else if (typeConnexion === "etablissement") {
            history.push("/accueil/etablissement");
            window.location.reload();
          }
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        history.push("/");
      });
  };

  const seDeconnecter = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const sInscrire = (event) => {
    event.preventDefault();
    history.push("/inscription");
  };

  const ajouterLieu = (event) => {
    event.preventDefault();
    const LieuObjet = {
      nom: nouveauNom,
      description: nouveauDescription,
      etablissement_id: etablissement.id,
    };
    webService
      .creeLieu(LieuObjet)
      .then((lieuRenvoye) => {
        setNouveauNom("");
        setNouveauDescription("");
        history.push("/accueil/etablissement");
      })
      .catch((error) => {});
  };

  const genererCodeQR = (lieu_id) => {
    const QRObjet = {
      etablissement_id: etablissement.id,
      lieu_id: lieu_id,
    };
    webService
      .creeCodeQR(QRObjet)
      .then((resultat) => {
        setQRCode(resultat);
        history.push("/qrcode");
      })
      .catch((error) => {});
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

  const changementTelephoneEtablissement = (e) => {
    setNouveauTelephoneEtablissement(e.target.value);
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

  const changementDescription = (e) => {
    setNouveauDescription(e.target.value);
  };

  const changementTypeConnexion = (e) => {
    setTypeConnexion(e.target.value);
  };

  useEffect(() => {
    webService
      .medecinCourant()
      .then((initialiserMedecin) => {
        setMedecin(initialiserMedecin);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    webService
      .etablissementCourant()
      .then((initialiserEtablissement) => {
        setEtablissement(initialiserEtablissement);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    document.title = "Block Covid";
  }, []);

  const exposedValue = {
    medecins,
    medecin,
    etablissements,
    etablissement,
    nouveauNom,
    nouveauNomEtablissement,
    nouveauPrenom,
    nouveauInami,
    nouveauTelephone,
    nouveauTelephoneEtablissement,
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
    nouveauDescription,
    typeConnexion,
    QRCode,
    history,
    token,
    ajouterMedecin,
    seConnecter,
    seDeconnecter,
    sInscrire,
    ajouterEtablissement,
    ajouterLieu,
    genererCodeQR,
    changementNom,
    changementNomEtablissement,
    changementPrenom,
    changementInami,
    changementTelephone,
    changementTelephoneEtablissement,
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
    changementTypeConnexion,
    changementDescription,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };

export default Context;
