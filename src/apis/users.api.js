import axiosInstance from "@/utils/axios.instance";

export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};
