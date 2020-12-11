import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import "./AccueilMedecin.css";

const AccueilMedecin = (props) => {
  const { medecin } = useContext(BlockCovidContext);
  const token = localStorage.getItem("token");

  if (token) {
    const base64data = btoa(unescape(encodeURIComponent(props.QRCode.QRCode)));
    return (
      <div>
        <div class="text-center">
          <h1> Bienvenue sur la page d'accueil du médecin </h1>
          <h3>Salut {medecin.nom}, Ravie de vous revoir !</h3>
          <br />
        </div>
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-4 container-login">
                <img src={`data:image/svg+xml;base64,${base64data}`} alt="" />
              </div>
              <div class="col-md-6">
                <strong>Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            <span class="glyphicon glyphicon-asterisk text-primary"></span>
                            Inami
                          </strong>
                        </td>
                        <td class="text-primary">{medecin.inami}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            <span class="glyphicon glyphicon-user  text-primary"></span>
                            Nom
                          </strong>
                        </td>
                        <td class="text-primary">{medecin.nom}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            <span class="glyphicon glyphicon-cloud text-primary"></span>
                            Prenom
                          </strong>
                        </td>
                        <td class="text-primary">{medecin.prenom}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            <span class="glyphicon glyphicon-envelope text-primary"></span>
                            Email
                          </strong>
                        </td>
                        <td class="text-primary">{medecin.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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

export default AccueilMedecin;
