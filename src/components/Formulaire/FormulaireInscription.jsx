import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";
import "./Formulaire.css";

const FormulaireInscription = () => {
  const {
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
  } = useContext(BlockCovidContext);

  return (
    <div>
      <h2> Bienvenue sur la page d'Inscription</h2>
      <div className="container-inscription" id="container">
        <div className="form-container sign-in-container">
          <form className="form-left" onSubmit={ajouterMedecin}>
            <h1> Inscription Medecin</h1>
            <div>
              <input
                value={nouveauNom}
                onChange={changementNom}
                placeholder="Nom"
              />
            </div>
            <div>
              <input
                value={nouveauPrenom}
                onChange={changementPrenom}
                placeholder="Prenom"
              />
            </div>
            <div>
              <input
                value={nouveauInami}
                onChange={changementInami}
                placeholder="Inami"
              />
            </div>
            <div>
              <input
                value={nouveauTelephone}
                onChange={changementTelephone}
                placeholder="Telephone"
              />
            </div>
            <div>
              <input
                type="mail"
                value={nouveauEmail}
                onChange={changementEmail}
                placeholder="Mail"
              />
            </div>
            <div>
              <input
                type="password"
                value={nouveauMotDePasse}
                onChange={changementMotDePasse}
                placeholder="Mot de passe"
              />
            </div>
            <div>
              <h3>Adresse</h3>
              <div>
                <input
                  value={nouveauRue}
                  onChange={changementRue}
                  placeholder="Rue et numéro"
                />
              </div>
              <div>
                <input
                  value={nouveauVille}
                  onChange={changementVille}
                  placeholder="Ville"
                />
              </div>
              <div>
                <input
                  value={nouveauCodePostal}
                  onChange={changementCodePostal}
                  placeholder="Code postal"
                />
              </div>
              <div>
                <button type="submit"> S'inscrire </button>
              </div>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <form onSubmit={ajouterEtablissement}>
                <h1> Inscription Etablissement </h1>
                <div>
                  <input
                    value={nouveauNomEtablissement}
                    onChange={changementNomEtablissement}
                    placeholder="Nom de l'établissement"
                  />
                </div>
                <div>
                  <input
                    type="mail"
                    value={nouveauEmailEtablissement}
                    onChange={changementEmailEtablissement}
                    placeholder="Mail"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={nouveauMotDePasseEtablissement}
                    onChange={changementMotDePasseEtablissement}
                    placeholder="Mot de passe"
                  />
                </div>
                <h3>Adresse</h3>
                <div>
                  <input
                    value={nouveauRueEtablissement}
                    onChange={changementRueEtablissement}
                    placeholder="Rue et numéro"
                  />
                </div>
                <div>
                  <input
                    value={nouveauVilleEtablissement}
                    onChange={changementVilleEtablissement}
                    placeholder="Ville"
                  />
                </div>
                <div>
                  <input
                    value={nouveauCodePostalEtablissement}
                    onChange={changementCodePostalEtablissement}
                    placeholder="Code postal"
                  />
                </div>
                <button className="ghost" id="signUp">
                  {" "}
                  S'inscrire{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireInscription;
