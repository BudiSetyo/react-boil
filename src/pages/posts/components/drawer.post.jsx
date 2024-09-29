import PropTypes from "prop-types";
import { Form, Input, Button, Drawer, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import useDrawer from "../hooks/useDrawer";

const DrawerPost = ({ open, onClose }) => {
  const { states, handles } = useDrawer(onClose);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {states.loading ? <LoadingOutlined /> : <PlusOutlined />}
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
    <Drawer title="Create Post" open={open} onClose={onClose} width={420}>
      <div className="my-6 w-full flex justify-center">
        <Upload
          name="image"
          listType="picture-card"
          className="post-uploader"
          showUploadList={false}
          beforeUpload={handles.beforeUpload}
          onChange={handles.handleChange}
          action={import.meta.env.VITE_API_URL + "/posts/image"}
          headers={{ authorization: "Bearer " + localStorage.getItem("token") }}
        >
          {states.imageUrl ? (
            <img
              src={states.imageUrl}
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

      <Form layout="vertical" onFinish={handles.onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Paragraph 1"
          name="paragraph_1"
          rules={[
            {
              required: true,
              message: "Please input your paragraph 1!",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Paragraph 2" name="paragraph_2">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Paragraph 3" name="paragraph_3">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Paragraph 4" name="paragraph_4">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Paragraph 5" name="paragraph_5">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <div className="w-full flex justify-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

DrawerPost.propTypes = {
  imgUrl: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default DrawerPost;
