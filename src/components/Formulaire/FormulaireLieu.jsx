import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";
import "./Formulaire.css";

const FormulaireLieu = () => {
  const {
    nouveauNom,
    nouveauDescription,
    changementNom,
    changementDescription,
    ajouterLieu,
  } = useContext(BlockCovidContext);

  return (
    <div>
      <div class="container">
        <div class="row ajout-container">
          <div class="col-md-6 login-form-1">
            <form className="form-center" onSubmit={ajouterLieu}>
              <h1>Ajouter un lieu</h1>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  value={nouveauNom}
                  onChange={changementNom}
                  placeholder="Nom du lieu"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  value={nouveauDescription}
                  onChange={changementDescription}
                  placeholder="Desciption du lieu"
                />
              </div>
              <br />
              <div class="form-group text-center">
                <input type="submit" class="btnSubmit" value="Ajouter" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireLieu;
