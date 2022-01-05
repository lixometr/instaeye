export const getProxyImage = (path) => {
  return `${process.env.VUE_APP_BASE_URL}/proxy/image/${path}`;
};
