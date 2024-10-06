import { message } from "antd";
import { useState } from "react";
import { useServices } from "@/query/service.query";

const useDrawerEdit = (serviceData, onClose) => {
  const { mutationEdit } = useServices();

  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(serviceData.image);

  const handleChange = (info) => {
    const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(img);
    };

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
    if (!imageUrl) {
      return message.error("Study case image is required!");
    }

    const newValues = {
      ...values,
      image: imageUrl,
    };

    mutationEdit.mutate({ id: serviceData.id, data: newValues });

    return onClose();
  };

  return {
    states: { imageUrl, loadingImage },
    handles: { onFinish, handleChange },
  };
};

export default useDrawerEdit;
