import { message } from "antd";
import { useState } from "react";
import { useStudy } from "@/query/study.query";

const useDrawer = (onClose) => {
  const { mutationCreate } = useStudy();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(img);
    };

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
      return message.error("Study case image is required!");
    }

    if (!values.steps || values.steps?.length < 2) {
      return message.error(
        "Steps are required and are at least more or equal to two!"
      );
    }

    if (!values.results || values.results?.length < 2) {
      return message.error(
        "Results are required and are at least more or equal to two!"
      );
    }

    const newValues = { ...values, image: imageUrl };

    mutationCreate.mutate(newValues);
    onClose();

    return;
  };

  return {
    states: { loading, imageUrl },
    handles: {
      onFinish,
      handleChange,
    },
  };
};

export default useDrawer;
