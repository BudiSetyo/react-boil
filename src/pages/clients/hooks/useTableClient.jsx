import { useEffect, useState } from "react";
import { useClients } from "@/query/client.query";

const useTableClients = () => {
  const { data, isLoading, mutationDelete } = useClients();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
    delete: false,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [clientData, setClientData] = useState({});

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetClientData = (data) => setClientData(data);

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

  const handleDeleteClient = () => {
    mutationDelete.mutate(clientData?.id);
    handleSetClientData({});
    return handleToogle("delete");
  };

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: { toogle, filteredData, search, clientData },
    handles: {
      handleToogle,
      handleSearch,
      handleSetClientData,
      handleDeleteClient,
    },
  };
};

export default useTableClients;
