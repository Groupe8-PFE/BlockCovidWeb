import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";

const LieuxList = (props) => {
    const { genererCodeQR } = useContext(BlockCovidContext)
    const lieux = props.lieux
    return (
        <div>
            <h3>Lieux </h3>
            <div>
                <ul>
                    {lieux.map(lieu => (
                        <li key={lieu.id}>
                            <div>
                                <h3>
                                    {lieu.nom} : {lieu.description}
                                </h3>
                                <button value={lieu.id} onClick={() => genererCodeQR(lieu.id)}>
                                    Generer code QR
                            </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default LieuxList