import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import useDrawer from "../hooks/useDrawer";
import { UploadImage } from "@/components";

const DrawerPost = ({ open, onClose }) => {
  const { states, handles } = useDrawer(onClose);

  return (
    <Drawer title="Create Post" open={open} onClose={onClose} width={420}>
      <UploadImage
        imageUrl={states.imageUrl}
        loading={states.loading}
        onChange={handles.handleChange}
      />

      <Form
        layout="vertical"
        onFinish={handles.onFinish}
        onChange={handles.handleChange}
      >
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
