import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";
import "./Formulaire.css";

const FormulaireLieu = () => {
    const {
        nouveauNom,
        nouveauDescription,
        changementNom,
        changementDescription,
        ajouterLieu,
    } = useContext(BlockCovidContext);

    return (
        <div>
            <h3>Ajouter un lieu</h3>
            <div>
                <div>
                    <form onSubmit={ajouterLieu}>
                        <div>
                            <input
                                value={nouveauNom}
                                onChange={changementNom}
                                placeholder="Nom du lieu"
                            />
                        </div>
                        <div>
                            <input
                                value={nouveauDescription}
                                onChange={changementDescription}
                                placeholder="Desciption du lieu"
                            />
                        </div>
                        <div>
                            <button type="submit"> Ajouter un lieu </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default FormulaireLieu;