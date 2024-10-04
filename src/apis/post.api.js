import axiosInstance from "@/utils/axios.instance";

export const getPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const getPost = async (postId) => {
  const response = await axiosInstance.get(`/posts/${postId}`);
  return response.data;
};

export const createPost = async (data) => {
  const response = await axiosInstance.post("/posts", data);
  return response.data;
};

export const editPost = async (data) => {
  const response = await axiosInstance.patch(`/posts/${data.id}`, {
    ...data.data,
  });
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axiosInstance.delete(`/posts/${id}`);

  return response.data;
};
