import PropTypes from "prop-types";
import { Form, Input, Button, Drawer, Skeleton } from "antd";
import useDrawerEdit from "../hooks/useDrawerEdit";
import { UploadImage } from "@/components";

const DrawerEditPost = ({ open, onClose, postId }) => {
  const { states, handles } = useDrawerEdit(postId, onClose);
  const { postData } = states;

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
          <UploadImage
            loading={states.loadingImage}
            imageUrl={states.imageUrl}
            onChange={handles.handleChange}
          />

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
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item
              label="Paragraph 2"
              name="paragraph_2"
              initialValue={postData.paragraph ? postData.paragraph[1] : ""}
            >
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item
              label="Paragraph 3"
              name="paragraph_3"
              initialValue={postData.paragraph ? postData.paragraph[2] : ""}
            >
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item
              label="Paragraph 4"
              name="paragraph_4"
              initialValue={postData.paragraph ? postData.paragraph[3] : ""}
            >
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item
              label="Paragraph 5"
              name="paragraph_5"
              initialValue={postData.paragraph ? postData.paragraph[4] : ""}
            >
              <Input.TextArea rows={5} />
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
