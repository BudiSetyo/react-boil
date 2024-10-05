import { useState, useEffect } from "react";
import { useStudy } from "@/query/study.query";

const useTableStudy = () => {
  const { data, isLoading, mutationDelete } = useStudy();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
    delete: false,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [studyData, setStudyData] = useState({});

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetStudy = (data) => setStudyData(data);

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

  const handleDeleteStudy = () => {
    mutationDelete.mutate(studyData?.id);
    handleSetStudy({});
    return handleToogle("delete");
  };

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: {
      toogle,
      filteredData,
      search,
      studyData,
    },
    handles: {
      handleToogle,
      handleSearch,
      handleSetStudy,
      handleDeleteStudy,
    },
  };
};

export default useTableStudy;
