import { useEffect, useState } from "react";
import { useUsers } from "@/query/user.query";

const useTableUsers = () => {
  const { data, isLoading } = useUsers();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState({});

  const handleUserData = (data) => setUserData(data);

  const handleToogle = (key) =>
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));

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

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: { toogle, filteredData, search, userData },
    handles: { handleToogle, handleSearch, handleUserData },
  };
};

export default useTableUsers;
