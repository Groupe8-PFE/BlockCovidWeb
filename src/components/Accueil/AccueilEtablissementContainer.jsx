import { useContext, useEffect, useState } from "react";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import AccueilEtablissement from "./AccueilEtablissement";
import webServices from "../../services/webServices";

const AccueilEtablissementContainer = () => {
  const { etablissement } = useContext(BlockCovidContext);
  const [lieux, setLieux] = useState([]);

  const recevoirLieux = () => {
    webServices
      .lieuxEtablissement(etablissement.id)
      .then((reponse) => {
        setLieux(reponse);
      })
      .catch((error) => {});
  };

  useEffect(recevoirLieux, [etablissement]);

  return <AccueilEtablissement lieux={lieux} />;
};

export default AccueilEtablissementContainer;
