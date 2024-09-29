import { useEffect, useState } from "react";
import { usePosts } from "@/query/post.query";

const useTablePosts = () => {
  const { data, isLoading } = usePosts();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
  });
  const [postId, setPostId] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetPost = (postId) => setPostId(postId);

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
    states: { toogle, postId, filteredData, search },
    handles: { handleToogle, handleSetPost, handleSearch },
  };
};

export default useTablePosts;
