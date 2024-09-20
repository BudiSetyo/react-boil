import PropTypes from "prop-types";
import { Form, Input, Button, Drawer, Upload, Skeleton } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import useDrawerEdit from "../hooks/useDrawerEdit";

const DrawerEditPost = ({ open, onClose, postId }) => {
  const { states, handles } = useDrawerEdit(postId, onClose);
  const { postData } = states;

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {states.loadingImage ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="mt-8">Upload</div>
    </button>
  );

  return (
    <Drawer
      title="Edit Post"
      placement="left"
      open={open}
      onClose={onClose}
      width={420}
    >
      {states.loading ? (
        <Skeleton />
      ) : (
        <section>
          <div className="my-6 w-full flex justify-center">
            <Upload
              name="image"
              listType="picture-card"
              className="post-uploader"
              showUploadList={false}
              beforeUpload={handles.beforeUpload}
              onChange={handles.handleChange}
              action={import.meta.env.VITE_API_URL + "/posts/image"}
              headers={{
                authorization: "Bearer " + localStorage.getItem("token"),
              }}
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
              initialValue={postData.title ? postData.title : ""}
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
              initialValue={postData.paragraph ? postData.paragraph[0] : ""}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Paragraph 2"
              name="paragraph_2"
              initialValue={postData.paragraph ? postData.paragraph[1] : ""}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Paragraph 3"
              name="paragraph_3"
              initialValue={postData.paragraph ? postData.paragraph[2] : ""}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Paragraph 4"
              name="paragraph_4"
              initialValue={postData.paragraph ? postData.paragraph[3] : ""}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Paragraph 5"
              name="paragraph_5"
              initialValue={postData.paragraph ? postData.paragraph[4] : ""}
            >
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
        </section>
      )}
    </Drawer>
  );
};

DrawerEditPost.propTypes = {
  onClose: PropTypes.any,
  open: PropTypes.any,
  postId: PropTypes.any,
};

export default DrawerEditPost;
