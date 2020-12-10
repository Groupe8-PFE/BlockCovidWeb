import React, { useContext } from "react";
import BlockCovidContext from "../../contexts/BlockCovidContext";
import "./QR.css";

const QRCode = () => {

    const { QRCode } = useContext(BlockCovidContext)
    console.log("QRCode : ", QRCode)
    const base64data = btoa(unescape(encodeURIComponent(QRCode.svg)));
    return (
        <div className="qr text-center">
           <img src={`data:image/svg+xml;base64,${base64data }`} alt="" />
        </div>
    )
}
export default QRCode