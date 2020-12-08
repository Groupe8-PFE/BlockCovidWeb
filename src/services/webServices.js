import axios from 'axios'
/*
const API_MEDECINS = 'https://blockcovid-api.herokuapp.com/api/medecins';
const API_LOGIN = 'https://blockcovid-api.herokuapp.com/api/login';
*/

const API_MEDECINS = 'http://localhost:8000/api/medecins';
const API_MEDECIN = 'http://localhost:8000/api/authMedecin';
const API_LOGIN_MEDECIN = 'http://localhost:8000/api/loginMedecin';
const API_LOGIN_ETABLISSEMENT = 'http://localhost:8000/api/loginEtablissement';
const API_ETABLISSEMENTS = 'http://localhost:8000/api/etablissements'


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

const seConnecterMedecin = nouveauObjet => {
    const request = axios.post(API_LOGIN_MEDECIN, nouveauObjet, headers)
    console.log(token)  
    return request.then(response => response.data)
}

const seConnecterEtablissement = nouveauObjet => {
    const request = axios.post(API_LOGIN_ETABLISSEMENT, nouveauObjet, headers)
    console.log(token)  
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
    const returnedValue = request.then(response => response.data)
    return returnedValue
}

// eslint-disable-next-line
export default { tousMedecins, creeMedecin, seConnecterMedecin, seConnecterEtablissement, creeEtablissement, medecinCourant }
