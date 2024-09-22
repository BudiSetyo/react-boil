import { useQuery, useMutation } from "@tanstack/react-query";
import { POSTS_QUERY_KEY } from "./key";
import { getPosts, createPost, editPost } from "@/apis/post.api";
import queryClient from "./queryClient";
import { message } from "antd";

export const usePosts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: getPosts,
  });

  const mutationCreate = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [POSTS_QUERY_KEY],
      });

      return message.success(data?.message || "Post created successfully");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: editPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [POSTS_QUERY_KEY],
      });

      return message.success(data?.message || "Post created successfully");
    },
  });

  return { data, error, isLoading, mutationCreate, mutationEdit };
};
