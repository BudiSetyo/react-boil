import axiosInstance from "@/utils/axios.instance";

export const getClients = async () => {
  const response = await axiosInstance.get("/clients");
  return response.data;
};

export const getClient = async (postId) => {
  const response = await axiosInstance.get(`/clients/${postId}`);
  return response.data;
};

export const createClient = async (data) => {
  const response = await axiosInstance.post("/clients", data);
  return response.data;
};

export const editClient = async (data) => {
  const response = await axiosInstance.patch(`/clients/${data.id}`, {
    ...data.data,
  });
  return response.data;
};

export const deleteClient = async (id) => {
  const response = await axiosInstance.delete(`/clients/${id}`);

  return response.data;
};
