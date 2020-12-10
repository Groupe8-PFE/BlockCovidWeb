import React, {useState, useContext} from "react";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import AccueilMedecin from "./AccueilMedecin";
import webServices from "../../services/webServices"


const AccueilMedecinController = () => {
    const { medecin } = useContext(BlockCovidContext);
    const [QRCode, setQRCode] = useState("")
    console.log("boucle infinie Medecin controller")
        webServices
        .recevoirQRCode(medecin.id)
        .then((response) => {
          console.log("Response pour le QR code : ", response.svg)
          const QRCodeRenvoye = {
            id: response.medecin.id,
            QRCode: response.svg
          }
          setQRCode(QRCodeRenvoye)
          console.log("QRCode Container",QRCode)
        })
        .catch((error) => {
          console.warn(error);
        });

      return (
          <AccueilMedecin QRCode={QRCode} />
      )
}

export default AccueilMedecinController