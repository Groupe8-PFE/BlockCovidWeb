import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import webService from "../services/webServices";

const Context = React.createContext(null);
console.log("boucle infinie Context")

const ProviderWrapper = (props) => {
  const [medecin, setMedecin] = useState("");
  const [medecins, setMedecins] = useState([]);
  const [etablissements, setEtablissements] = useState([]);
  const [etablissement, setEtablissement] = useState("")
  const [QRCode, setQRCode] = useState("")
  const [nouveauNom, setNouveauNom] = useState("");
  const [nouveauNomEtablissement, setNouveauNomEtablissement] = useState("");
  const [nouveauPrenom, setNouveauPrenom] = useState("");
  const [nouveauInami, setNouveauInami] = useState("");
  const [nouveauTelephone, setNouveauTelephone] = useState("");
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
  const [nouveauDescription, setNouveauDescription] = useState("")
  const [ typeConnexion, setTypeConnexion ] = useState("medecin")
  const [lieux, setLieux] = useState([])
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
        history.push("/accueil/medecin");
      })
      .catch((error) => {
        console.warn(error);
      });
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
      .catch((error) => {
        console.log("ouiiiii")
        console.warn(error);
      });
  };

  const seConnecter = (event) => {
    event.preventDefault();
    console.log(typeConnexion)
    const connexionObjet = {
      email: nouveauEmail,
      password: nouveauMotDePasse,
    };
    console.log(connexionObjet);
    webService
      .seConnecterMedecin(connexionObjet, typeConnexion)
      .then((response) => {
        //console.log(response.etablissement);
        setNouveauEmail("");
        setNouveauMotDePasse("");
        if (response.token) {
          //recevoirMedecin()
          localStorage.setItem(
            "token",
            "Bearer " + response.token
          );
          if(typeConnexion === "medecin") history.push("/accueil/medecin");
          else if (typeConnexion === "etablissement") history.push('/accueil/etablissement')
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        console.warn(error);
        history.push("/");
      });
  };

  /**const recevoirMedecin = () => {
    console.log("Suce ma bite");
    webService
      .medecinCourant()
      .then((response) => {
        console.log("Response recevoir medecin : ", response.medecin);
        const medecinObjet = {
          nom: response.medecin.nom,
          prenom: response.medecin.prenom,
          id: response.medecin.id,
        };
        setMedecin(medecinObjet);
      })
      .catch((error) => {
        console.warn(error);
      });
  };*/

  const seDeconnecter = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const sInscrire = (event) => {
    event.preventDefault();
    history.push("/inscription");
  };

  const recevoirLieux = (id) => {
    webService
      .lieuxEtablissement(id)
      .then((lieux) => {
        console.log("Lieux recu : ", lieux)
        setLieux(lieux)
      })
      .catch((error) => {
        console.log(error);
      })
  }

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
      })
      .catch((error) => {
        console.warn(error);
      })
  }

  const genererCodeQR = (lieu_id) => {
    const QRObjet = {
      etablissement_id: etablissement.id,
      lieu_id: lieu_id
    };
    webService
      .creeCodeQR(QRObjet)
      .then((resultat) => {
        setQRCode(resultat)
        console.log("Resultat : ",resultat)
        history.push('/qrcode')
      })
      .catch((error) => {
        console.warn(error)
      })
  }

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

  const changementDescription = (e) => {
    setNouveauDescription(e.target.value)
  }

  const changementTypeConnexion = (e) => {
    console.log("Test type : ",e.target.value)
    setTypeConnexion(e.target.value);
  }

  /**useEffect(() => {
    console.log("effect");
    webService.tousMedecins().then((initialiserMedecins) => {
      console.log("promesse remplie");
      setMedecins(initialiserMedecins);
    });
  }, []);*/

  useEffect(() => {
    console.log("effect");
    webService.medecinCourant()
    .then((initialiserMedecin) => {
      console.log("promesse remplie", initialiserMedecin);
      setMedecin(initialiserMedecin);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    console.log("effect");
    webService.etablissementCourant()
    .then((initialiserEtablissement) => {
      console.log("promesse remplie", initialiserEtablissement);
      setEtablissement(initialiserEtablissement);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  //console.log("rendues ", medecins.length, " medecins");

  const exposedValue = {
    medecins,
    medecin,
    etablissements,
    etablissement,
    lieux,
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
    recevoirLieux,
    ajouterLieu,
    genererCodeQR,
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
    changementTypeConnexion,
    changementDescription
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };

export default Context;
