import axiosInstance from "@/utils/axios.instance";

export const getPosts = async () => {
  const response = axiosInstance.get("/posts");

  return response.data;
};
