import axios from "../libs/axios";

export const createInnerAccount = (data) => axios.post("/inner-account", data);
export const findInnerAccounts = () => axios.get("/inner-account");
export const getInnerAccountById = () => axios.get(`/inner-account/${id}`);
export const deleteInnerAccount = (id) => axios.delete(`/inner-account/${id}`);
export const updateInnerAccount = (id, data) =>
  axios.put(`/inner-account/${id}`, data);
export const makeInnerAccountActive = (id) =>
  axios.put(`/inner-account/${id}/make-active`);
