import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import { DeleteOutlined, DiffOutlined } from "@ant-design/icons";
import useDrawer from "../hooks/useDrawer";
import { UploadImage } from "@/components";

const DrawerStudy = ({ open, onClose }) => {
  const { states, handles } = useDrawer(onClose);
  console.log(states.steps);

  return (
    <Drawer title="Create Study Case" open={open} onClose={onClose} width={420}>
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
          label="Company"
          name="company"
          rules={[
            {
              required: true,
              message: "Please input your company!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Challenge"
          name="challenge"
          rules={[
            {
              required: true,
              message: "Please input your challenge!",
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Objective"
          name="objective"
          rules={[
            {
              required: true,
              message: "Please input your objective!",
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>

        <div className="flex flex-col gap-2">
          <h1>Steps</h1>

          <div className="flex flex-col gap-4">
            {states.steps.map((item, index) => {
              return <Input.TextArea key={index} />;
            })}
          </div>

          <div className="flex justify-end mt-4">
            <div className="flex gap-4">
              <Button
                className="text-xl"
                type="primary"
                ghost
                shape="circle"
                size="large"
                onClick={handles.handleAddStep}
              >
                <DiffOutlined />
              </Button>

              <Button
                className="text-xl"
                type="primary"
                danger
                ghost
                shape="circle"
                size="large"
                onClick={handles.handleDeleteStep}
              >
                <DeleteOutlined />
              </Button>
            </div>
          </div>
        </div>

        <Form.Item className="mt-10">
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

DrawerStudy.propTypes = {
  imgUrl: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default DrawerStudy;
