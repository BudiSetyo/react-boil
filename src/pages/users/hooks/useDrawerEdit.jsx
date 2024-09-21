import { message } from "antd";
import { useState } from "react";
import { useUsers } from "@/query/user.query";

const useDrawerEdit = (onClose) => {
  const { mutationEdit } = useUsers();
  const [userData, setUserData] = useState({});

  const handleSetUserData = (data) => setUserData(data);

  const onFinish = (values) => {
    mutationEdit.mutate({ id: userData.id, data: values });

    message.success("Success edit user");

    return onClose();
  };

  return {
    states: { userData },
    handles: { onFinish, handleSetUserData },
  };
};

export default useDrawerEdit;
