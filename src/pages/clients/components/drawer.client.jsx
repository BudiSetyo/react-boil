import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import { UploadImage } from "@/components";
import useDrawer from "../hooks/useDrawer";

const DrawerClient = ({ open, onClose }) => {
  const { states, handles } = useDrawer(onClose);

  return (
    <Drawer title="Create Client" open={open} onClose={onClose} width={420}>
      <UploadImage
        imageUrl={states.imageUrl}
        loading={states.loading}
        onChange={handles.handleChange}
      />

      <Form layout="vertical" onFinish={handles.onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
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

DrawerClient.propTypes = {
  imgUrl: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default DrawerClient;
