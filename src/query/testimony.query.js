import { useQuery, useMutation } from "@tanstack/react-query";
import { TESTIMONIES_QUERY_KEY } from "./key";
import { getTestimonies, deleteTestimony } from "@/apis/testimony";
import queryClient from "./queryClient";
import { message } from "antd";

export const useTestimony = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [TESTIMONIES_QUERY_KEY],
    queryFn: getTestimonies,
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTestimony,
    onSuccess: (data) => {
      queryClient.invalidateQueries([TESTIMONIES_QUERY_KEY]);

      return message.success(data?.message || "Testimony deleted successfully");
    },
  });

  return {
    data,
    error,
    isLoading,
    mutationDelete,
  };
};
