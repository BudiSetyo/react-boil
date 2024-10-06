import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import {
  DeleteOutlined,
  DiffOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import useDrawer from "../hooks/useDrawer";
import { UploadImage } from "@/components";

const DrawerEditStudy = ({ open, onClose }) => {
  const { states, handles } = useDrawer(onClose);

  return (
    <Drawer title="Create Study Case" open={open} onClose={onClose} width={640}>
      <UploadImage
        imageUrl={states.imageUrl}
        loading={states.loading}
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

        <Form.Item label="Steps">
          <Form.List name="steps">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }, index) => (
                    <div key={key}>
                      <Form.Item
                        {...restField}
                        name={[name, "description"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing step value",
                          },
                        ]}
                      >
                        <Input.TextArea rows={3} />
                      </Form.Item>
                      {fields.length - 1 === index ? (
                        <div className="flex gap-2">
                          <Button
                            className="text-xl"
                            type="primary"
                            ghost
                            shape="circle"
                            size="large"
                            onClick={() => add()}
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
                            onClick={() => remove(name)}
                          >
                            <DeleteOutlined />
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  ))}

                  {!fields.length ? (
                    <Button
                      className="w-full"
                      type="dashed"
                      onClick={() => add()}
                      icon={<FileAddOutlined />}
                      size="large"
                    >
                      Add
                    </Button>
                  ) : null}
                </>
              );
            }}
          </Form.List>
        </Form.Item>

        <Form.Item label="Results">
          <Form.List name="results">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }, index) => (
                    <div key={key}>
                      <Form.Item
                        {...restField}
                        name={[name, "description"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing result value",
                          },
                        ]}
                      >
                        <Input.TextArea rows={3} />
                      </Form.Item>
                      {fields.length - 1 === index ? (
                        <div className="flex gap-2">
                          <Button
                            className="text-xl"
                            type="primary"
                            ghost
                            shape="circle"
                            size="large"
                            onClick={() => add()}
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
                            onClick={() => remove(name)}
                          >
                            <DeleteOutlined />
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  ))}

                  {!fields.length ? (
                    <Button
                      className="w-full"
                      type="dashed"
                      onClick={() => add()}
                      icon={<FileAddOutlined />}
                      size="large"
                    >
                      Add
                    </Button>
                  ) : null}
                </>
              );
            }}
          </Form.List>
        </Form.Item>

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

DrawerEditStudy.propTypes = {
  imgUrl: PropTypes.any,
  onClose: PropTypes.any,
  open: PropTypes.any,
};

export default DrawerEditStudy;
