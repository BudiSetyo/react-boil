import axiosInstance from "@/utils/axios.instance";

export const getTestimonies = async () => {
  const response = await axiosInstance.get("/testimony");
  return response.data;
};

export const deleteTestimony = async (id) => {
  const response = await axiosInstance.delete(`/testimony/${id}`);

  return response.data;
};
