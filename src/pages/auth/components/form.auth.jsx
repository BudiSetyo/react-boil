import { Button, Form, Input } from "antd";
import useForm from "../hooks/useForm";

const FormAuth = () => {
  const { handles, states } = useForm();

  return (
    <Form
      name="auth"
      initialValues={{
        remember: true,
      }}
      onFinish={handles.onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item name="email">
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item className="flex justify-end">
        <Button loading={states.loading} type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormAuth;
