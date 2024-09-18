import { useQuery } from "@tanstack/react-query";
import { POSTS_QUERY_KEY } from "./key";
import { getPosts } from "@/apis/post.api";

export const usePosts = () => {
  const { data, error, isLoading } = useQuery(
    POSTS_QUERY_KEY,
    () => getPosts(),
    {
      // Options
      staleTime: 0, // Don't cache login response
    }
  );

  return { data, error, isLoading };
};
