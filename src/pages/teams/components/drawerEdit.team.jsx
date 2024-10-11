import PropTypes from "prop-types";
import { Form, Input, Button, Drawer } from "antd";
import { UploadImage } from "@/components";
import useDrawerEdit from "../hooks/useDrawerEdit";

const DrawerEditTeam = ({ open, onClose, teamData }) => {
  const { states, handles } = useDrawerEdit(teamData, onClose);

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
          initialValue={teamData.name}
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
          label="Role"
          name="role"
          initialValue={teamData.role}
          rules={[
            {
              required: true,
              message: "Please input your role!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          initialValue={teamData.description}
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

DrawerEditTeam.propTypes = {
  onClose: PropTypes.any,
  open: PropTypes.any,
  teamData: PropTypes.any,
};

export default DrawerEditTeam;
