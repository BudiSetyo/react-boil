import axiosInstance from "@/utils/axios.instance";

export const getServices = async () => {
  const response = await axiosInstance.get("/services");
  return response.data;
};

export const getService = async (id) => {
  const response = await axiosInstance.get(`/services/${id}`);
  return response.data;
};

export const createService = async (data) => {
  const response = await axiosInstance.post("/services", data);
  return response.data;
};

export const editService = async (data) => {
  const response = await axiosInstance.patch(`/services/${data.id}`, {
    ...data.data,
  });
  return response.data;
};

export const deleteService = async (id) => {
  const response = await axiosInstance.delete(`/services/${id}`);

  return response.data;
};
