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
    ajouterMedecin,
    ajouterEtablissement,
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
  } = useContext(BlockCovidContext);

  return (
    <div>
      <h2> Bienvenue sur la page d'Inscription</h2>
      <div class="container login-container">
        <div class="row">
          <div class="col-md-6 login-form-1">
            <h3>Inscription médecin</h3>
            <form onSubmit={ajouterMedecin}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nom *"
                  value={nouveauNom}
                  onChange={changementNom}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Prénom *"
                  value={nouveauPrenom}
                  onChange={changementPrenom}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Inami *"
                  value={nouveauInami}
                  onChange={changementInami}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Telephone *"
                  value={nouveauTelephone}
                  onChange={changementTelephone}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email *"
                  value={nouveauEmail}
                  onChange={changementEmail}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Mot de passe *"
                  value={nouveauMotDePasse}
                  onChange={changementMotDePasse}
                />
              </div><br/>
              <h3>Adresse</h3>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Rue *"
                  value={nouveauRue}
                  onChange={changementRue}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ville *"
                  value={nouveauVille}
                  onChange={changementVille}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Code postal *"
                  value={nouveauCodePostal}
                  onChange={changementCodePostal}
                />
              </div>
              <div class="form-group text-center">
                <input type="submit" class="btnSubmit" value="S'inscrire" />
              </div>
            </form>
          </div>
          <div class="col-md-6 login-form-2">
            <h3>Inscription établissement</h3>
            <form onSubmit={ajouterEtablissement}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nom de l'établissement *"
                  value={nouveauNomEtablissement}
                  onChange={changementNomEtablissement}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Telephone *"
                  value={nouveauTelephoneEtablissement}
                  onChange={changementTelephoneEtablissement}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email *"
                  value={nouveauEmailEtablissement}
                  onChange={changementEmailEtablissement}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Mot de passe *"
                  value={nouveauMotDePasseEtablissement}
                  onChange={changementMotDePasseEtablissement}
                />
              </div><br/>
              <h3>Adresse</h3>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Rue *"
                  value={nouveauRueEtablissement}
                  onChange={changementRueEtablissement}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ville *"
                  value={nouveauVilleEtablissement}
                  onChange={changementVilleEtablissement}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Code postal *"
                  value={nouveauCodePostalEtablissement}
                  onChange={changementCodePostalEtablissement}
                />
              </div>
              <div class="form-group text-center">
                <input type="submit" class="btnSubmit" value="S'inscrire" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireInscription;
