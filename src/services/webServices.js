import axios from 'axios'

const API_MEDECINS = 'https://blockcovid-api.herokuapp.com/api/medecins';
const API_MEDECIN = 'https://blockcovid-api.herokuapp.com/api/authMedecin';
const API_LOGIN_MEDECIN = 'https://blockcovid-api.herokuapp.com/api/loginMedecin';
const API_LOGIN_ETABLISSEMENT = 'https://blockcovid-api.herokuapp.com/api/loginEtablissement';
const API_ETABLISSEMENTS = 'https://blockcovid-api.herokuapp.com/api/etablissements';
const API_ETABLISSEMENT = 'https://blockcovid-api.herokuapp.com/api/authEtablissement';


const token = localStorage.getItem("token");


const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token,
};

const tousMedecins = () => {
    const request = axios.get(API_MEDECINS, headers)
    return request.then(response => response.data)
}

const creeMedecin = nouveauObjet => {
    const request = axios.post(API_MEDECINS, nouveauObjet, headers)
    return request.then(response => response.data)
}

const seConnecterMedecin = (nouveauObjet, typeConnexion) => {
    let API = API_LOGIN_MEDECIN
    if(typeConnexion === "etablissement"){
        console.log("Connexion etablissement ooook")
        API = API_LOGIN_ETABLISSEMENT
    }
    console.log("API utilisé", API)
    const request = axios.post(API, nouveauObjet, headers)
    return request.then(response => response.data)
}

const creeEtablissement = nouveauObjet => {
    console.log("nouveau objet : " + nouveauObjet)
    const request = axios.post(API_ETABLISSEMENTS, nouveauObjet, headers)
    const returnedValue = request.then(response => response.data)
    return returnedValue
}

const medecinCourant = () => {
    const request = axios.get(API_MEDECIN, { headers: {"Authorization" : `${token}`}})
    console.log("Medecin courant", API_MEDECIN)
    const returnedValue = request.then(response => response.data)
    return returnedValue
}

const etablissementCourant = () => {
    const request = axios.get(API_ETABLISSEMENT, { headers: {"Authorization" : `${token}`}})
    console.log("Etablissement courant", API_ETABLISSEMENT)
    const returnedValue = request.then(response => response.data)
    return returnedValue
}

const recevoirQRCode = (id) => {
    console.log("boucle infinie")
    const request = axios.get(`${API_MEDECINS}/${id}`, { headers: {"Authorization" : `${token}`}})
    return request.then(response => response.data)
}

const lieuxEtablissement = idEtablissement => {
    const request = axios.get(`https://blockcovid-api.herokuapp.com/api/etablissements/${idEtablissement}/lieus`)
    const returnedValue = request.then(response => response.data)
    return returnedValue
}

const creeCodeQR = nouveauObjet => {
    const request = axios.get(`https://blockcovid-api.herokuapp.com/api/etablissements/${nouveauObjet.etablissement_id}/lieus/${nouveauObjet.lieu_id}`)
    const returnedValue = request.then(response => response.data)
    return returnedValue
}

const creeLieu = nouveauObjet => {
    const request = axios.post(`https://blockcovid-api.herokuapp.com/api/etablissements/${nouveauObjet.etablissement_id}/lieus`, nouveauObjet, headers)
    return request.then(response => response.data)
}

// eslint-disable-next-line
export default { tousMedecins, creeMedecin, seConnecterMedecin, creeEtablissement, medecinCourant, 
    etablissementCourant, recevoirQRCode, lieuxEtablissement, creeCodeQR, creeLieu }
