import { APIURL } from "./URL";
import axios from "axios";

function getUser(email,pwd){
    return axios.get(APIURL+"?email="+email+"&pwd="+pwd)
}

function addUSer(data){
    return axios.post(APIURL, data)
}
export {getUser,addUSer}