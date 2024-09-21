import { useQuery, useMutation } from "@tanstack/react-query";
import { USERS_QUERY_KEY } from "./key";
import { getUsers, createUser, editUser } from "@/apis/user.api";
import queryClient from "./queryClient";

export const useUsers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: getUsers,
  });

  const mutationCreate = useMutation({
    mutationFn: createUser,
    onSuccess: queryClient.invalidateQueries({
      queryKey: [USERS_QUERY_KEY],
    }),
  });

  const mutationEdit = useMutation({
    mutationFn: editUser,
    onSuccess: queryClient.invalidateQueries({
      queryKey: [USERS_QUERY_KEY],
    }),
  });

  return { data, error, isLoading, mutationCreate, mutationEdit };
};
