import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlockCovidContext from "../../contexts/BlockCovidContext";

const Menu = () => {
  const { seDeconnecter, typeConnexion } = useContext(BlockCovidContext);
  const token = localStorage.getItem("token");
  const padding = {
    paddingRight: 5,
  };
  
  if (token && typeConnexion === "medecin") {
    return (
      <div>
        <div class="menu">
          <Link style={padding} to="/" onClick={seDeconnecter}>
            Deconnexion
          </Link>
          <Link style={padding} to="/ajouterLieu">
            Ajouter lieu
          </Link>
        </div>
      </div>
    );
  }

  if (token) {
    return (
      <div>
        <div class="menu">
          <Link style={padding} to="/" onClick={seDeconnecter}>
            Deconnexion
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div class="menu">
        <Link style={padding} to="/">
          Connexion
        </Link>
        <Link style={padding} to="/inscription">
          Inscription
        </Link>
      </div>
    </div>
  );
};

export default Menu;
