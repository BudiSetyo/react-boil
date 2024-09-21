import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import useDrawer from "../hooks/useDrawer";

const DrawerUser = ({ open, onClose }) => {
  const { handles } = useDrawer(onClose);

  return (
    <Drawer title="Create User" open={open} onClose={onClose} width={420}>
      <Form layout="vertical" onFinish={handles.onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
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

DrawerUser.propTypes = {
  imgUrl: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default DrawerUser;
