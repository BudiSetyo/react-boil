import { useEffect, useState } from 'react';
import { usePosts } from '@/query/post.query';

const useTablePosts = () => {
  const { data, isLoading, mutationDelete } = usePosts();

  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
    delete: false,
  });
  const [postId, setPostId] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [postData, setPostData] = useState({});

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetPost = (postId) => setPostId(postId);

  const handleSetPostData = (data) => setPostData(data);

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

  const handleDeletePost = () => {
    mutationDelete.mutate(postData?.id);
    handleSetPostData({});
    return handleToogle('delete');
  };

  useEffect(() => {
    setFilteredData(data?.data);
  }, [data?.data]);

  return {
    query: { data, isLoading },
    states: { toogle, postId, filteredData, search, postData },
    handles: {
      handleToogle,
      handleSetPost,
      handleSearch,
      handleSetPostData,
      handleDeletePost,
    },
  };
};

export default useTablePosts;
