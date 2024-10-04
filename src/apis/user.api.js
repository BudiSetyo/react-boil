import axiosInstance from "@/utils/axios.instance";

export const getUsers = async () => {
  const response = await axiosInstance({
    method: "get",
    url: "/users",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
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

export const editPassword = async (data) => {
  const response = await axiosInstance.patch(
    `/users//password/${data.userId}`,
    {
      ...data.data,
    }
  );

  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/users/${id}`);

  return response.data;
};
