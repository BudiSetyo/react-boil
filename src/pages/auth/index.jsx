import { Button, Form, Input, Image } from "antd";
import Logo from "@/assets/logo.png";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Auth = () => {
  return (
    <main className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white min-w-80 py-4 px-8 rounded-lg">
        <div className="flex justify-center">
          <Image width={120} src={Logo} />
        </div>

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
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
            <Input placeholder="Email" />
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
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default Auth;
