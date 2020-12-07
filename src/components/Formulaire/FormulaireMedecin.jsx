import React, { useContext }  from 'react';
import BlockCovidContext from "../../contexts/BlockCovidContext"

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
            <h2>Formulaire d'inscription Medecin</h2>
            <form onSubmit={ajouterMedecin}>
                <div>
                    Nom : <input
                        value={nouveauNom}
                        onChange={changementNom} />
                </div>
                <div>
                    Prenom : <input
                        value={nouveauPrenom}
                        onChange={changementPrenom} />
                </div>
                <div>
                    Inami : <input
                        value={nouveauInami}
                        onChange={changementInami} />
                </div>
                <div>
                    Telephone : <input
                        value={nouveauTelephone}
                        onChange={changementTelephone} />
                </div>
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
                    <h4>Adresse</h4>
                    <div>
                        Rue et numéro : <input
                        value={nouveauRue}
                        onChange={changementRue} />
                    </div>
                    <div>
                        Ville : <input
                        value={nouveauVille}
                        onChange={changementVille} />
                    </div>
                    <div>
                        Code postal : <input
                        value={nouveauCodePostal}
                        onChange={changementCodePostal} />
                    </div>
                    <div> 
                        <button type="submit"> S'inscrire </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormulaireMedecin