import axiosInstance from "@/utils/axios.instance";

export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const getUser = async (userId) => {
  const response = await axiosInstance.get(`/users/${userId}`);
  return response.data;
};

export const createUser = async (data) => {
  const response = await axiosInstance.post(`/users/`, data);
  return response.data;
};

export const editUser = async (data) => {
  const response = await axiosInstance.patch(`/users/${data.userId}`, {
    ...data.data,
  });
  return response.data;
};
