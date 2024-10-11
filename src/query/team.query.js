import { useQuery, useMutation } from "@tanstack/react-query";
import { TEAMS_QUERY_KEY } from "./key";
import { getTeams, createTeam, editTeam, deleteTeam } from "@/apis/team.api";
import queryClient from "./queryClient";
import { message } from "antd";

export const useTeams = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [TEAMS_QUERY_KEY],
    queryFn: getTeams,
  });

  const mutationCreate = useMutation({
    mutationFn: createTeam,
    onSuccess: (data) => {
      queryClient.invalidateQueries([TEAMS_QUERY_KEY]);

      return message.success(data?.message || "Team created successfully");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: editTeam,
    onSuccess: (data) => {
      queryClient.invalidateQueries([TEAMS_QUERY_KEY]);

      return message.success(data?.message || "Team edited successfully");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTeam,
    onSuccess: (data) => {
      queryClient.invalidateQueries([TEAMS_QUERY_KEY]);

      return message.success(data?.message || "Team deleted successfully");
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
