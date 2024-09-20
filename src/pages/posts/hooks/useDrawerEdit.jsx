import { message } from "antd";
import { useState, useEffect } from "react";
import { getPost } from "@/apis/post.api";
import { usePosts } from "@/query/post.query";

const useDrawerEdit = (postId, onClose) => {
  const { mutationEdit } = usePosts();

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [postData, setPostData] = useState({});

  // console.log(postData);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 720 / 720 < 1;
    if (!isLt2M) {
      message.error("Image must smaller than 700Kb!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoadingImage(true);
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      message.success(info.file.response.message);
      getBase64(info.file.originFileObj, () => {
        setLoadingImage(false);

        setImageUrl(info.file.response?.data);
      });
    }

    if (info.file.status === "error") {
      setLoadingImage(false);
      return message.error(info.file.response);
    }
  };

  const onFinish = (values) => {
    const newValues = { ...values, image: imageUrl };
    mutationEdit.mutate({ id: postId, data: newValues });

    message.success("Success edit post");

    return onClose();
  };

  useEffect(() => {
    if (postId) {
      setLoading(true);
      getPost(postId)
        .then((res) => {
          setLoading(false);
          setPostData(res.data);
          setImageUrl(postData.image);
        })
        .catch((err) => {
          setLoading(false);
          message.error(
            err.response?.data.message || "Failed fetch post " + postId
          );
        });
    }
  }, [postId, postData.image]);

  return {
    states: { loading, imageUrl, postData, loadingImage },
    handles: { onFinish, beforeUpload, handleChange },
  };
};

export default useDrawerEdit;
