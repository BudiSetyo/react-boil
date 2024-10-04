import { message } from "antd";

const useUploadImage = () => {

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

  return {
    handles: { beforeUpload },
  };
};

export default useUploadImage;
