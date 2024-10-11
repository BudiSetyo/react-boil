import { useEffect, useState } from "react";
import { useTeams } from "@/query/team.query";

const useTableTeams = () => {
  const { data, isLoading, mutationDelete } = useTeams();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
    delete: false,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [teamData, setTeamData] = useState({});

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetTeamData = (data) => setTeamData(data);

  const handleSearch = (value) => {
    setSearch(value);

    const dataFilter = data?.data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (!value) {
      return setFilteredData(data?.data);
    }

    return setFilteredData(dataFilter);
  };

  const handleDeleteTeam = () => {
    mutationDelete.mutate(teamData?.id);
    handleSetTeamData({});
    return handleToogle("delete");
  };

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: { toogle, filteredData, search, teamData },
    handles: {
      handleToogle,
      handleSearch,
      handleSetTeamData,
      handleDeleteTeam,
    },
  };
};

export default useTableTeams;
