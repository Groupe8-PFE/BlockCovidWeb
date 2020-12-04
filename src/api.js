import axios from 'axios'
const API_BEARS = '/api/bears';
const API_USERS = '/api/users';

const token = localStorage.getItem("token");

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token,
};




const getAllBears = () => {
    console.log('test')
    const request = axios.get(API_BEARS,headers)
    const rep = request.then(response=> response.data)
    console.log(rep)
    return rep
}
const getAllUsers = () => {
    console.log('test')
    const request = axios.get(API_USERS,headers)
    const rep = request.then(response=> response.data)
    console.log(rep)
    return rep
}


export default {getAllBears,getAllUsers}
