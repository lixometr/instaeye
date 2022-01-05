import axios from "../libs/axios";

export const createInnerProxy = (data) => axios.post("/inner-proxy", data);
export const findInnerProxys = () => axios.get("/inner-proxy");
export const getInnerProxyById = () => axios.get(`/inner-proxy/${id}`);
export const deleteInnerProxy = (id) => axios.delete(`/inner-proxy/${id}`);

export const updateInnerProxy = (id, data) =>
  axios.put(`/inner-proxy/${id}`, data);
