import { useUsers } from "@/query/user.query";
import { message } from "antd";

const useDrawerEdit = (onClose, userData) => {
  const { mutationEdit, mutationPassword } = useUsers();

  const onFinish = (values) => {
    mutationEdit.mutate({ userId: userData?.id, data: values });

    return onClose();
  };

  const onFinishPassword = (values) => {
    if (values.password !== values.retype_password) {
      return message.error("Password doesn't same!");
    }

    mutationPassword.mutate({
      userId: userData?.id,
      data: { password: values.password },
    });

    return onClose();
  };

  return {
    handles: { onFinish, onFinishPassword },
  };
};

export default useDrawerEdit;
