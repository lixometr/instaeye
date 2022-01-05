import axios from "../libs/axios";

export const findAccounts = ({ page, query = {} }) =>
  axios.post("/account/find", query, {
    params: { page },
  });
export const removeAccount = (id) => axios.delete(`/account/${id}`);
