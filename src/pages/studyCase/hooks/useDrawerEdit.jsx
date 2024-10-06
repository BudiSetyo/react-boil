import { message } from "antd";
import { useState, useEffect } from "react";
import { getStudy } from "@/apis/study.api";
import { useStudy } from "@/query/study.query";

const useDrawerEdit = (studyId, onClose) => {
  const { mutationEdit } = useStudy();

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [studyData, setStudyData] = useState({});

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
      steps: values.steps.map((item, index) => ({
        order: index + 1,
        description: item.description,
      })),
      results: values.results.map((item, index) => ({
        order: index + 1,
        description: item.description,
      })),
    };

    mutationEdit.mutate({ id: studyId, data: newValues });

    return onClose();
  };

  useEffect(() => {
    if (studyId) {
      setLoading(true);
      getStudy(studyId)
        .then((res) => {
          setLoading(false);
          setStudyData(res.data);
          setImageUrl(studyData.image);
        })
        .catch((err) => {
          setLoading(false);
          message.error(
            err.response?.data.message || "Failed fetch post " + studyId
          );
        });
    }
  }, [studyId, studyData.image]);

  return {
    states: { loading, imageUrl, studyData, loadingImage },
    handles: { onFinish, handleChange },
  };
};

export default useDrawerEdit;
