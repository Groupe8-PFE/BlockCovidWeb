import React, { useContext }  from 'react';
import BlockCovidContext from "../../contexts/BlockCovidContext"

const FormulaireConnexion = () => {
     const { 
            nouveauEmail,
            nouveauMotDePasse,
            seConnecter,
            changementEmail,
            changementMotDePasse,
         } = useContext(BlockCovidContext)
         
    return (
        <div>
            <h2>Formulaire de connexion</h2>
            <form onSubmit={seConnecter}>
                <div>
                    Mail : <input
                        type="mail"
                        value={nouveauEmail}
                        onChange={changementEmail} />
                </div>
                <div>
                    Mot de passe : <input
                        type="password" 
                        value={nouveauMotDePasse}
                        onChange={changementMotDePasse} />
                </div>
                <div> 
                    <button type="submit"> Se connecter </button>
                </div>
            </form>
        </div>
    )
}

export default FormulaireConnexion