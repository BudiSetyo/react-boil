import { message } from "antd";
import { useUsers } from "@/query/user.query";

const useDrawer = (onClose) => {
  const { mutationCreate } = useUsers();

  const onFinish = (values) => {
    const mutation = mutationCreate.mutate(values);
    console.log(mutation);

    onClose();

    return message.success("Create user succesfuly");
  };

  return {
    handles: { onFinish },
  };
};

export default useDrawer;
