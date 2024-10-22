import Icon, {
  FileAddOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Modal, Button } from "antd";
import useGlobalHooks from "@/hooks";

const Sidebar = () => {
  const { state } = useGlobalHooks();
  const { toggle } = state;

  const menuData = [{ name: "posts", icon: FileAddOutlined }];

  return (
    <div
      className={`${
        toggle.sidebar ? "w-[300px]" : "w-[60px]"
      } shadow-xl bg-blue-400 duration-500 `}
    >
      <div
        className={`h-screen w-full flex flex-col justify-between font-semibold text-gray-700 py-4 px-2`}
      >
        <div className="flex flex-col gap-2">
          {menuData.map((menu, index) => {
            return (
              <button
                key={index}
                className={`py-1 px-3 flex gap-4 bg-white text-xl rounded`}
                onClick={() => {}}
              >
                <span className={``}>
                  <Icon component={menu.icon} />
                </span>
                {toggle.sidebar ? (
                  <p className="capitalize">{menu.name}</p>
                ) : null}
              </button>
            );
          })}
        </div>
        <button
          className="py-1 px-3 flex gap-4 bg-white text-xl rounded"
          onClick={() => {}}
        >
          <span className="">
            <Icon component={LogoutOutlined} />
          </span>
          {toggle.sidebar ? <p className="capitalize">Logout</p> : null}
        </button>
      </div>

      <Modal open={false} onCancel={() => {}} width={300} footer={[]}>
        <div className="flex justify-center items-center gap-4 flex-col">
          <QuestionCircleOutlined className="text-4xl text-yellow-500" />

          <p className="text-lg">Do you want to logout ?</p>

          <div>
            <Button size="" type="primary" danger onClick={() => {}}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
