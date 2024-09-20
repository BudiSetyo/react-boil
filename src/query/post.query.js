import { useQuery, useMutation } from "@tanstack/react-query";
import { POSTS_QUERY_KEY } from "./key";
import { getPosts, createPost, editPost } from "@/apis/post.api";
import queryClient from "./queryClient";

export const usePosts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: getPosts,
  });

  const mutationCreate = useMutation({
    mutationFn: createPost,
    onSuccess: queryClient.invalidateQueries(POSTS_QUERY_KEY),
  });

  const mutationEdit = useMutation({
    mutationFn: editPost,
    onSuccess: queryClient.invalidateQueries(POSTS_QUERY_KEY),
  });

  return { data, error, isLoading, mutationCreate, mutationEdit };
};
