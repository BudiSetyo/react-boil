import axiosInstance from "@/utils/axios.instance";

export const getTeams = async () => {
  const response = await axiosInstance.get("/teams");
  return response.data;
};

export const getTeam = async (postId) => {
  const response = await axiosInstance.get(`/teams/${postId}`);
  return response.data;
};

export const createTeam = async (data) => {
  const response = await axiosInstance.post("/teams", data);
  return response.data;
};

export const editTeam = async (data) => {
  const response = await axiosInstance.patch(`/teams/${data.id}`, {
    ...data.data,
  });
  return response.data;
};

export const deleteTeam = async (id) => {
  const response = await axiosInstance.delete(`/teams/${id}`);

  return response.data;
};
