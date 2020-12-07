import React, { useContext } from 'react';
import BlockCovidContext from "../../contexts/BlockCovidContext"
import "./Formulaire.css"

const FormulaireConnexion = () => {
    const {
        nouveauEmail,
        nouveauMotDePasse,
        seConnecter,
        sInscrire,
        changementEmail,
        changementMotDePasse,
    } = useContext(BlockCovidContext)

    return (
        <div>
            <h2>Bienvenue sur l'application BlockCovidWeb</h2>
            <div class="container" id="container">
                <div class="form-container sign-in-container">
                    <form class="form-left" onSubmit={seConnecter}>
                        <h1>Connexion</h1>
                        <div>
                            <input
                                type="mail"
                                value={nouveauEmail}
                                onChange={changementEmail}
                                placeholder="Email" />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={nouveauMotDePasse}
                                onChange={changementMotDePasse}
                                placeholder="Mot De Passe" />
                        </div>
                        <div>
                            <button type="submit"> Se connecter </button>
                        </div>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <p> Si vous n'avez pas de compte Inscrivez-vous! </p>
                            <button class="ghost" id="signUp" onClick={sInscrire}>Inscription</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormulaireConnexion