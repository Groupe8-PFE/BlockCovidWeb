import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
        <div>
          <Link style={padding} to="/">Accueil</Link>
          <Link style={padding} to="/connexion">Connexion</Link>
          <Link style={padding} to="/inscription">Inscription</Link>
        </div>
    </div>
  )
}

export default Menu