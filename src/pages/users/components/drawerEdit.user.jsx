import PropTypes from "prop-types";
import { Form, Input, Button, Drawer, Skeleton } from "antd";
import useDrawerEdit from "../hooks/useDrawerEdit";

const DrawerEditPost = ({ open, onClose }) => {
  const { states, handles } = useDrawerEdit(onClose);

  return (
    <Drawer
      title="Edit User"
      placement="left"
      open={open}
      onClose={onClose}
      width={420}
    >
      {states.loading ? (
        <Skeleton />
      ) : (
        <section>
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
        </section>
      )}
    </Drawer>
  );
};

DrawerEditPost.propTypes = {
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default DrawerEditPost;
