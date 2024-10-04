import { useUsers } from "@/query/user.query";

const useDrawer = (onClose) => {
  const { mutationCreate } = useUsers();

  const onFinish = (values) => {
    mutationCreate.mutate(values);

    return onClose();
  };

  return {
    handles: { onFinish },
  };
};

export default useDrawer;
