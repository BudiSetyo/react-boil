import { useEffect, useState } from "react";
import { useUsers } from "@/query/user.query";

const useTableUsers = () => {
  const { data, isLoading } = useUsers();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
  });
  const [userId, setUserId] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetUser = (postId) => setUserId(postId);

  const handleSearch = (value) => {
    setSearch(value);

    const dataFilter = data?.data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
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
    states: { toogle, userId, filteredData, search },
    handles: { handleToogle, handleSetUser, handleSearch },
  };
};

export default useTableUsers;
