import { useQuery, useMutation } from "@tanstack/react-query";
import { CLIENTS_QUERY_KEY } from "./key";
import {
  getClients,
  createClient,
  editClient,
  deleteClient,
} from "@/apis/client.api";
import queryClient from "./queryClient";
import { message } from "antd";

export const useClients = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [CLIENTS_QUERY_KEY],
    queryFn: getClients,
  });

  const mutationCreate = useMutation({
    mutationFn: createClient,
    onSuccess: (data) => {
      queryClient.invalidateQueries([CLIENTS_QUERY_KEY]);

      return message.success(data?.message || "Client created successfully");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: editClient,
    onSuccess: (data) => {
      queryClient.invalidateQueries([CLIENTS_QUERY_KEY]);

      return message.success(data?.message || "Client edited successfully");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteClient,
    onSuccess: (data) => {
      queryClient.invalidateQueries([CLIENTS_QUERY_KEY]);

      return message.success(data?.message || "Client deleted successfully");
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
