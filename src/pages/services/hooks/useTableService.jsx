import { useEffect, useState } from "react";
import { useServices } from "@/query/service.query";

const useTableServices = () => {
  const { data, isLoading, mutationDelete } = useServices();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
    delete: false,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [serviceData, setServiceData] = useState({});

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetServiceData = (data) => setServiceData(data);

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

  const handleDeleteService = () => {
    mutationDelete.mutate(serviceData?.id);
    handleSetServiceData({});
    return handleToogle("delete");
  };

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: { toogle, filteredData, search, serviceData },
    handles: {
      handleToogle,
      handleSearch,
      handleSetServiceData,
      handleDeleteService,
    },
  };
};

export default useTableServices;
