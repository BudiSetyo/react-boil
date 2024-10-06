import { useQuery, useMutation } from "@tanstack/react-query";
import { SERVICES_QUERY_KEY } from "./key";
import {
  getServices,
  createService,
  editService,
  deleteService,
} from "@/apis/service.api";
import queryClient from "./queryClient";
import { message } from "antd";

export const useServices = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [SERVICES_QUERY_KEY],
    queryFn: getServices,
  });

  const mutationCreate = useMutation({
    mutationFn: createService,
    onSuccess: (data) => {
      queryClient.invalidateQueries([SERVICES_QUERY_KEY]);

      return message.success(data?.message || "Service created successfully");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: editService,
    onSuccess: (data) => {
      queryClient.invalidateQueries([SERVICES_QUERY_KEY]);

      return message.success(data?.message || "Service edited successfully");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteService,
    onSuccess: (data) => {
      queryClient.invalidateQueries([SERVICES_QUERY_KEY]);

      return message.success(data?.message || "Service deleted successfully");
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
