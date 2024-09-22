import { useQuery, useMutation } from "@tanstack/react-query";
import { USERS_QUERY_KEY } from "./key";
import { getUsers, createUser, editUser, editPassword } from "@/apis/user.api";
import queryClient from "./queryClient";
import { message } from "antd";

export const useUsers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: getUsers,
  });

  const mutationCreate = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [USERS_QUERY_KEY],
      });

      return message.success(data?.message || "User created successfully");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: editUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [USERS_QUERY_KEY],
      });

      return message.success(data?.message || "User updated successfully");
    },
  });

  const mutationPassword = useMutation({
    mutationFn: editPassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY] });

      return message.success(data?.message || "Password updated successfully");
    },
  });

  return {
    data,
    error,
    isLoading,
    mutationCreate,
    mutationEdit,
    mutationPassword,
  };
};
