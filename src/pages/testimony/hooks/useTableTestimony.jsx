import { useEffect, useState } from "react";
import { useTestimony } from "@/query/testimony.query";

const useTableTestimony = () => {
  const { data, isLoading, mutationDelete } = useTestimony();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
    delete: false,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [testimonyData, setTestimonyData] = useState({});

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetTestimonyData = (data) => setTestimonyData(data);

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

  const handleDeleteTestimony = () => {
    mutationDelete.mutate(testimonyData?.id);
    handleSetTestimonyData({});
    return handleToogle("delete");
  };

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: { toogle, filteredData, search, testimonyData },
    handles: {
      handleToogle,
      handleSearch,
      handleSetTestimonyData,
      handleDeleteTestimony,
    },
  };
};

export default useTableTestimony;
