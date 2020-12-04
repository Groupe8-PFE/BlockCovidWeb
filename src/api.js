import axios from 'axios'
const API_ROOT = '/api/bears';


const token = localStorage.getItem("token");

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token,
};




const getAll = () => {
    console.log('test')
    const request = axios.get(API_ROOT)
    const rep = request.then(response=> response.data)
    console.log(rep)
    return rep
}


export default {getAll}
