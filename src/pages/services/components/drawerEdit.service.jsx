import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import { UploadImage } from "@/components";
import useDrawerEdit from "../hooks/useDrawerEdit";

const DrawerEditService = ({ open, onClose, serviceData }) => {
  const { states, handles } = useDrawerEdit(serviceData, onClose);

  return (
    <Drawer title="Edit Service" open={open} onClose={onClose} width={420}>
      <UploadImage
        imageUrl={states.imageUrl}
        loading={states.loading}
        onChange={handles.handleChange}
      />

      <Form layout="vertical" onFinish={handles.onFinish}>
        <Form.Item
          label="Name"
          name="name"
          initialValue={serviceData.name}
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
          label="Description"
          name="description"
          initialValue={serviceData.description}
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
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
    </Drawer>
  );
};

DrawerEditService.propTypes = {
  onClose: PropTypes.any,
  open: PropTypes.any,
  serviceData: PropTypes.any,
};

export default DrawerEditService;
