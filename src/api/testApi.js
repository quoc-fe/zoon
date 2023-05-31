import axiosClient from "./apiClient";

const testApi = {
  getImage: () => {
    const url = "/images/search";
    return axiosClient.get(url);
  },
};
export default testApi;
