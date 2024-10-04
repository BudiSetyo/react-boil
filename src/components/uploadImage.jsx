import PropTypes from "prop-types";
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import useUploadImage from "./hooks/useUploadImage";

const UploadImage = ({ onChange, imageUrl, loading }) => {
  const { handles } = useUploadImage();

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <div className="my-6 w-full flex justify-center">
      <Upload
        name="image"
        listType="picture-card"
        className="post-uploader"
        showUploadList={false}
        beforeUpload={handles.beforeUpload}
        onChange={onChange}
        action={import.meta.env.VITE_API_URL + "/image/auth"}
        headers={{ authorization: "Bearer " + localStorage.getItem("token") }}
      >
        {loading ? (
          uploadButton
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="post"
            style={{
              width: "100%",
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

UploadImage.propTypes = {
  imageUrl: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.any,
};

export default UploadImage;
