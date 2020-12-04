import React  from 'react';

const FormulaireMedecin = (props) => {
    return (
        <div>
            <h2>Formulaire d'inscription Medecin</h2>
            <form onSubmit={props.ajouterMedecin}>
                <div>
                    Nom : <input
                        value={props.nouveauNom}
                        onChange={props.changementNom} />
                </div>
                <div>
                    Prenom : <input
                        value={props.nouveauPrenom}
                        onChange={props.changementPrenom} />
                </div>
                <div>
                    Inami : <input
                        value={props.nouveauInami}
                        onChange={props.changementInami} />
                </div>
                <div>
                    Telephone : <input
                        value={props.nouveauTelephone}
                        onChange={props.changementTelephone} />
                </div>
                <div>
                    Mail : <input
                        value={props.nouveauMail}
                        onChange={props.changementMail} />
                </div>
                <div>
                    <h4>Adresse</h4>
                    <div>
                        Rue et numéro : <input
                        value={props.nouveauRue}
                        onChange={props.changementRue} />
                    </div>
                    <div>
                        Ville : <input
                        value={props.nouveauVille}
                        onChange={props.changementVille} />
                    </div>
                    <div>
                        Code postal : <input
                        value={props.nouveauCodePostal}
                        onChange={props.changementCodePostal} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormulaireMedecin