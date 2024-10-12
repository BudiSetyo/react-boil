import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import { UploadImage } from "@/components";
import useDrawerEdit from "../hooks/useDrawerEdit";

const DrawerEditClient = ({ open, onClose, clientData }) => {
  const { states, handles } = useDrawerEdit(clientData, onClose);

  return (
    <Drawer title="Edit Client" open={open} onClose={onClose} width={420}>
      <UploadImage
        imageUrl={states.imageUrl}
        loading={states.loading}
        onChange={handles.handleChange}
      />

      <Form layout="vertical" onFinish={handles.onFinish}>
        <Form.Item
          label="Name"
          name="name"
          initialValue={clientData.name}
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

DrawerEditClient.propTypes = {
  onClose: PropTypes.any,
  open: PropTypes.any,
  clientData: PropTypes.any,
};

export default DrawerEditClient;
