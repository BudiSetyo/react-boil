import axiosInstance from "@/utils/axios.instance";

export const getStudys = async () => {
  const response = await axiosInstance.get("/study-case");
  return response.data;
};

export const getStudy = async (id) => {
  const response = await axiosInstance.get(`/study-case/${id}`);
  return response.data;
};

export const createStudy = async (data) => {
  const response = await axiosInstance.post("/study-case", data);
  return response.data;
};

export const editStudy = async (data) => {
  const response = await axiosInstance.patch(`/study-case/${data.id}`, {
    ...data.data,
  });
  return response.data;
};
