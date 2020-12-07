import axios from 'axios'

const API_MEDECINS = 'https://blockcovid-api.herokuapp.com/api/medecins';

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
    const request = axios.get(API_MEDECINS,headers)
    return request.then(response => response.data)
}

const creeMedecin = nouveauObjet => {
    const request = axios.post(API_MEDECINS, nouveauObjet)
    return request.then(response => response.data)
}

const seConnecter = nouveauObjet => {
    const request = axios.post(API_MEDECINS, nouveauObjet)
    return request.then(response => response.data)
}

export default { tousMedecins, creeMedecin, seConnecter }
