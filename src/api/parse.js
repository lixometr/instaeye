import axios from "../libs/axios"
export const parsePause = () => axios.post('/parse/pause')
export const parseContinue = () => axios.post('/parse/continue')
export const parseClear = () => axios.post('/parse/clear')
export const parseGetCount = () => axios.get('/parse/count')
export const parseGetStats = () => axios.get('/parse/count')

export const parseAddToQueue = (data) => axios.post('/parse/add', data)

export const parseGetStatus = () => axios.get('/parse/status')