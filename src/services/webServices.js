import axios from 'axios'
/*
const API_MEDECINS = 'https://blockcovid-api.herokuapp.com/api/medecins';
const API_LOGIN = 'https://blockcovid-api.herokuapp.com/api/login';
*/

const API_MEDECINS = 'http://localhost:8000/api/medecins';
const API_LOGIN = 'http://localhost:8000/api/login';
const API_ETABLISSEMENTS = 'http://localhost:8080/api/etablissements'

const token = localStorage.getItem("token");


const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token,
};

/**
    const getAllUsers = () => {
    console.log('test')
    const request = axios.get(API_USERS,headers)
    const rep = request.then(response=> response.data)
    console.log(rep)
    return rep
}*/

const tousMedecins = () => {
    const request = axios.get(API_MEDECINS, headers)
    return request.then(response => response.data)
}

const creeMedecin = nouveauObjet => {
    const request = axios.post(API_MEDECINS, nouveauObjet, headers)
    return request.then(response => response.data)
}

const seConnecter = nouveauObjet => {
    const request = axios.post(API_LOGIN, nouveauObjet, headers)
    return request.then(response => response.data)
}

const creeEtablissement = nouveauObjet => {
    const request = axios.post(API_ETABLISSEMENTS, nouveauObjet, headers)
    return request.then(response => response.data)
}

const seDeconnecter = () => {
    localStorage.removeItem("token")
}

const recupererTokenCourant = () => {
    return token
}

// eslint-disable-next-line
export default { tousMedecins, creeMedecin, seConnecter, creeEtablissement, recupererTokenCourant }
