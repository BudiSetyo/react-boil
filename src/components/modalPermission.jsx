import PropTypes from "prop-types";
import { Modal, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const ModalPermission = ({ open, onCancel, onConfirm, content }) => {
  return (
    <Modal open={open} onCancel={onCancel} width={300} footer={[]}>
      <div className="flex justify-center items-center gap-4 flex-col">
        <QuestionCircleOutlined className="text-4xl text-yellow-500" />

        <div className="text-lg text-center">{content}</div>

        <div>
          <Button size="" type="primary" danger onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

ModalPermission.propTypes = {
  content: PropTypes.any,
  onCancel: PropTypes.any,
  onConfirm: PropTypes.any,
  open: PropTypes.any,
};

export default ModalPermission;
