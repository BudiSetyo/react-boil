import { message } from "antd";
import { useState } from "react";
import { usePosts } from "@/query/post.query";

const useDrawer = (onClose) => {
  const { mutationCreate } = usePosts();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

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
      setLoading(true);
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      message.success(info.file.response.message);
      getBase64(info.file.originFileObj, () => {
        setLoading(false);
        setImageUrl(info.file.response?.data);
      });
    }

    if (info.file.status === "error") {
      return message.error(info.file.response);
    }
  };

  const onFinish = (values) => {
    if (!imageUrl) {
      return message.error("Post image is required!");
    }
    const newValues = { ...values, image: imageUrl };

    mutationCreate.mutate(newValues);
    onClose();

    return;
  };

  return {
    states: { loading, imageUrl },
    handles: { onFinish, beforeUpload, handleChange },
  };
};

export default useDrawer;
