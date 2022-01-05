import axios from "../libs/axios"
export const getLogs = () => axios.get('/logs')