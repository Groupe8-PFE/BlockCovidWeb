import React, { useContext } from 'react';
import BlockCovidContext from "../../contexts/BlockCovidContext"
import "./Formulaire.css"

const FormulaireMedecin = () => {
    const { nouveauNom,
        nouveauPrenom,
        nouveauInami,
        nouveauTelephone,
        nouveauEmail,
        nouveauMotDePasse,
        nouveauRue,
        nouveauVille,
        nouveauCodePostal,
        ajouterMedecin,
        changementNom,
        changementPrenom,
        changementInami,
        changementTelephone,
        changementEmail,
        changementMotDePasse,
        changementRue,
        changementVille,
        changementCodePostal } = useContext(BlockCovidContext)

    return (
        <div>
            <h2> Bienvenue sur la page d'Inscription</h2>
            <div class="container-inscription" id="container">
                <div class="form-container sign-in-container">
                    <form class="form-left" onSubmit={ajouterMedecin}>
                        <h1> Inscription Medecin</h1>
                        <div>
                            <input
                                value={nouveauNom}
                                onChange={changementNom}
                                placeholder="Nom" />
                        </div>
                        <div>
                            <input
                                value={nouveauPrenom}
                                onChange={changementPrenom}
                                placeholder="Prenom" />
                        </div>
                        <div>
                            <input
                                value={nouveauInami}
                                onChange={changementInami}
                                placeholder="Inami" />
                        </div>
                        <div>
                            <input
                                value={nouveauTelephone}
                                onChange={changementTelephone}
                                placeholder="Telephone" />
                        </div>
                        <div>
                            <input
                                type="mail"
                                value={nouveauEmail}
                                onChange={changementEmail}
                                placeholder="Mail" />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={nouveauMotDePasse}
                                onChange={changementMotDePasse}
                                placeholder="Mot De Passe" />
                        </div>
                        <div>
                            <h3>Adresse</h3>
                            <div>
                                <input
                                    value={nouveauRue}
                                    onChange={changementRue}
                                    placeholder="Rue et Numero" />
                            </div>
                            <div>
                                <input
                                    value={nouveauVille}
                                    onChange={changementVille}
                                    placeholder="Ville" />
                            </div>
                            <div>
                                <input
                                    value={nouveauCodePostal}
                                    onChange={changementCodePostal}
                                    placeholder="Code Postal" />
                            </div>
                            <div>
                                <button type="submit"> S'inscrire </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <form>
                                <h1> Inscription Etablissement </h1>
                                {/* Il faut ajouter toutes les methodes et valeur aux variables du formulaire Etablissement
                                    Aussi ne pas oublier la method Submit
                                */}
                                <input type="text" placeholder="Nom De L'Etablissement" />
                                <input type="password" placeholder="MotDePasse" />
                                <h3>Adresse</h3>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Rue et Numero" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Ville" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Code Postal" />
                                </div>
                                <button class="ghost" id="signUp"> Inscription </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormulaireMedecin