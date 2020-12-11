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

const seConnecter = (nouveauObjet, typeConnexion) => {
    let API = API_LOGIN_MEDECIN
    if (typeConnexion === "etablissement") {
        API = API_LOGIN_ETABLISSEMENT
    }
    const request = axios.post(API, nouveauObjet, headers)
    return request.then(response => response.data)
}

const creeEtablissement = nouveauObjet => {
    const request = axios.post(API_ETABLISSEMENTS, nouveauObjet, headers)
    return request.then(response => response.data)
}

const medecinCourant = () => {
    const request = axios.get(API_MEDECIN, { headers: { "Authorization": `${token}` } })
    return request.then(response => response.data)
}

const etablissementCourant = () => {
    const request = axios.get(API_ETABLISSEMENT, { headers: { "Authorization": `${token}` } })
    return request.then(response => response.data)
}

const recevoirQRCode = (id) => {
    const request = axios.get(`${API_MEDECINS}/${id}`, { headers: { "Authorization": `${token}` } })
    return request.then(response => response.data)
}

const lieuxEtablissement = idEtablissement => {
    const request = axios.get(`https://blockcovid-api.herokuapp.com/api/etablissements/${idEtablissement}/lieus`)
    return request.then(response => response.data)
}

const creeCodeQR = nouveauObjet => {
    const request = axios.get(`https://blockcovid-api.herokuapp.com/api/etablissements/${nouveauObjet.etablissement_id}/lieus/${nouveauObjet.lieu_id}`)
    return request.then(response => response.data)
}

const creeLieu = nouveauObjet => {
    const request = axios.post(`https://blockcovid-api.herokuapp.com/api/etablissements/${nouveauObjet.etablissement_id}/lieus`, nouveauObjet, headers)
    return request.then(response => response.data)
}

// eslint-disable-next-line
export default {
    tousMedecins, creeMedecin, seConnecter, creeEtablissement, medecinCourant,
    etablissementCourant, recevoirQRCode, lieuxEtablissement, creeCodeQR, creeLieu
}
