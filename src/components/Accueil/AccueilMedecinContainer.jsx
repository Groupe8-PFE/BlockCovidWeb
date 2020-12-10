import React, {useState, useContext, useEffect} from "react";

import BlockCovidContext from "../../contexts/BlockCovidContext";
import AccueilMedecin from "./AccueilMedecin";
import webServices from "../../services/webServices"


const AccueilMedecinContainer = () => {
    const { medecin } = useContext(BlockCovidContext);
    const [QRCode, setQRCode] = useState("")
    
    const JeRecoisCode = () => {
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
      })
    }
    useEffect(JeRecoisCode, [medecin])
      //JeRecoisCode()  
      console.log("jsuis la")
      return (
          <AccueilMedecin QRCode={QRCode} />
      )
}

export default AccueilMedecinContainer