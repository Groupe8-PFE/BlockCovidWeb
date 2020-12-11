import React, { useState, useContext, useEffect } from "react";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import AccueilMedecin from "./AccueilMedecin";
import webServices from "../../services/webServices";

const AccueilMedecinContainer = () => {
  const { medecin } = useContext(BlockCovidContext);
  const [QRCode, setQRCode] = useState("");

  const JeRecoisCode = () => {
    webServices
      .recevoirQRCode(medecin.id)
      .then((response) => {
        const QRCodeRenvoye = {
          id: response.medecin.id,
          QRCode: response.svg,
        };
        setQRCode(QRCodeRenvoye);
      })
      .catch((error) => {});
  };
  useEffect(JeRecoisCode, [medecin]);
  return <AccueilMedecin QRCode={QRCode} />;
};

export default AccueilMedecinContainer;
