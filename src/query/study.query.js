import { useQuery, useMutation } from "@tanstack/react-query";
import { STUDY_QUERY_KEY } from "./key";
import {
  getStudys,
  createStudy,
  editStudy,
  deleteStudy,
} from "@/apis/study.api";
import queryClient from "./queryClient";
import { message } from "antd";

export const useStudy = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [STUDY_QUERY_KEY],
    queryFn: getStudys,
  });

  const mutationCreate = useMutation({
    mutationFn: createStudy,
    onSuccess: (data) => {
      queryClient.invalidateQueries([STUDY_QUERY_KEY]);

      return message.success(data?.message || "Study created successfully");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: editStudy,
    onSuccess: (data) => {
      queryClient.invalidateQueries([STUDY_QUERY_KEY]);

      return message.success(data?.message || "Study edited successfully");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteStudy,
    onSuccess: (data) => {
      queryClient.invalidateQueries([STUDY_QUERY_KEY]);

      return message.success(data?.message || "Study deleted successfully");
    },
  });

  return {
    data,
    error,
    isLoading,
    mutationCreate,
    mutationEdit,
    mutationDelete,
  };
};
