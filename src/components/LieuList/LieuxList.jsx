import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LieuxList.css"

const LieuxList = (props) => {
  const { genererCodeQR } = useContext(BlockCovidContext);
  const lieux = props.lieux;
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />
      <div class="container mt-3 mb-4">
        <div class="col-lg-20 mt-4 mt-lg-0">
          <div class="row">
            <div class="col-md-12">
              <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table class="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Lieu</th>
                      <th class="action text-right">Générer Code QR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lieux.map((lieu) => (
                      <tr key={lieu.id}>
                        <td class="title">
                          <div class="candidate-list-details">
                            <div class="candidate-list-info">
                              <div class="candidate-list-title">
                                <h5 class="mb-0">
                                  <a href="#">{lieu.nom}</a>
                                </h5>
                              </div>
                              <div class="candidate-list-option">
                                <ul class="list-unstyled">
                                  <li>
                                    <i class="fas fa-map-marker-alt pr-1"></i>
                                    {lieu.description}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul class="list-unstyled mb-0 d-flex justify-content-end">
                            <li>
                              <a
                                href="#"
                                onClick={() => genererCodeQR(lieu.id)}
                                class="text-primary"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="view"
                              >
                                <i class="far fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LieuxList;
