import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";
import "./Formulaire.css";

const FormulaireConnexion = () => {
  const {
    nouveauEmail,
    nouveauMotDePasse,
    typeConnexion,
    seConnecter,
    sInscrire,
    changementEmail,
    changementMotDePasse,
    changementTypeConnexion,
  } = useContext(BlockCovidContext);

  return (
    <div>
      <h2>Bienvenue sur l'application BlockCovidWeb</h2>
      <div class="container login-container">
        <div class="row">
          <div class="col-md-6 login-form-1">
            <form className="form-left" onSubmit={seConnecter}>
              <h1>Connexion </h1>
              <br />
              <div class="form-group">
                <input
                  type="mail"
                  class="form-control"
                  value={nouveauEmail}
                  onChange={changementEmail}
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  value={nouveauMotDePasse}
                  onChange={changementMotDePasse}
                  placeholder="Mot De Passe"
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control"
                  name="connexion"
                  value={typeConnexion}
                  onChange={changementTypeConnexion}
                >
                  <option value="medecin">Médecin</option>
                  <option value="etablissement">Établissement</option>
                </select>
              </div>
              <br />
              <div class="form-group text-center">
                <input type="submit" class="btnSubmit" value="Se connecter" />
              </div>
            </form>
          </div>
          <div class="col-md-6 login-form-2">
            <h3>
              Si vous n'avez pas de compte ? <br />
              Inscrivez-vous !
            </h3>
            <div class="form-group text-center">
              <input
                type="submit"
                class="btnSubmit"
                value="S'inscrire"
                onClick={sInscrire}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireConnexion;
