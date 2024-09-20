import { useState } from "react";

const useTablePosts = () => {
  const [toogle, setToogle] = useState({
    drawer: false,
    edit: false,
  });
  const [postId, setPostId] = useState();

  const handleToogle = (key) => {
    setToogle((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSetPost = (postId) => setPostId(postId);

  return {
    states: { toogle, postId },
    handles: { handleToogle, handleSetPost },
  };
};

export default useTablePosts;
