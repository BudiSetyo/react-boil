import { message } from "antd";
import { useState } from "react";
import { useStudy } from "@/query/study.query";

const useDrawer = (onClose) => {
  const { mutationCreate } = useStudy();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [steps, setSteps] = useState([
    {
      description: "",
    },
  ]);
  const [results, setResults] = useState([
    {
      description: "",
    },
  ]);

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
      return message.error("Post image is required!");
    }
    const newValues = { ...values, image: imageUrl };

    mutationCreate.mutate(newValues);
    onClose();

    return;
  };

  const handleAddStep = () => setSteps([...steps, { description: "" }]);

  const handleDeleteStep = () =>
    setSteps(steps.filter((_, index) => index !== steps.length - 1));

  const handleEditStep = (order, value) => {
    const newSteps = steps.map((item, index) => {
      if (order === index) {
        return { ...item, description: value };
      }

      return item;
    });

    return setSteps(newSteps);
  };

  const handleAddResult = () => setResults([...results, { description: "" }]);

  const handleDeleteResult = () =>
    setResults(results.filter((_, index) => index !== results.length - 1));

  return {
    states: { loading, imageUrl, steps, results },
    handles: {
      onFinish,
      handleChange,
      handleAddStep,
      handleAddResult,
      handleDeleteStep,
      handleDeleteResult,
      handleEditStep,
    },
  };
};

export default useDrawer;
