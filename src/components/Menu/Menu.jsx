import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <div>
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
