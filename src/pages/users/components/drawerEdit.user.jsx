import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import useDrawerEdit from "../hooks/useDrawerEdit";

const HeaderTitle = ({ title = "Title" }) => (
  <div className="text-lg font-semibold text-gray-500 mb-4">
    <h2>{title}</h2>
  </div>
);

const DrawerEditPost = ({ open, onClose, data }) => {
  const { handles } = useDrawerEdit(onClose, data);

  return (
    <Drawer
      title="Edit User"
      placement="left"
      open={open}
      onClose={onClose}
      width={420}
    >
      <section>
        <Form layout="vertical" onFinish={handles.onFinish}>
          <HeaderTitle title="Information" />

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            initialValue={data?.email}
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
            initialValue={data?.name}
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

        <Form layout="vertical" onFinish={handles.onFinishPassword}>
          <HeaderTitle title="Password" />

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

          <Form.Item
            label="Retype Password"
            name="retype_password"
            rules={[
              {
                required: true,
                message: "Please input your retype password!",
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
    </Drawer>
  );
};

DrawerEditPost.propTypes = {
  onClose: PropTypes.any,
  open: PropTypes.any,
  data: PropTypes.any,
};

HeaderTitle.propTypes = {
  title: PropTypes.any,
};

export default DrawerEditPost;
