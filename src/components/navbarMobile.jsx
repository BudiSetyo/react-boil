import { useState, useEffect } from "react";
import Icon, {
  MenuOutlined,
  CloseOutlined,
  FileAddOutlined,
  LogoutOutlined,
  HomeOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Modal } from "antd";

const NavbarMobile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [toggle, setToggle] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const menuData = [
    { name: "home", icon: HomeOutlined },
    { name: "posts", icon: FileAddOutlined },
    { name: "users", icon: UserOutlined },
  ];

  const handleMenu = (dest) => {
    setToggle(!toggle);
    navigate(`/${dest == "home" ? "" : dest}`);
  };

  useEffect(() => {
    setCurrentPage(location.pathname === "/" ? "/home" : location.pathname);
  }, [location.pathname]);

  return (
    <main>
      <div className="h-10 z-50 p-2 flex items-center bg-gray-100 shadow-lg sticky inset-x-0 top-0">
        <button
          className="text-gray-500 rounded hover:bg-gray-200 px-1"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {toggle && (
        <div className="absolute w-full top-10 bottom-0 bg-[#00000033] z-20">
          <div className="z-40 absolute bottom-0 top-0 bg-gray-100 container mx-auto max-w-screen-sm-md w-full md:w-1/2 flex flex-col justify-between font-semibold text-gray-700 p-2">
            <div className="flex flex-col gap-2">
              {menuData.map((menu, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      currentPage === "/" + menu.name
                        ? "bg-gray-500 text-white"
                        : "bg-gray-200"
                    } hover:bg-gray-500 hover:text-white w-full text-start flex gap-4 items-center text-xl px-6 py-2 rounded-full border border-gray-300`}
                    onClick={() => handleMenu(menu.name)}
                  >
                    <span className="text-gray-400">
                      <Icon component={menu.icon} />
                    </span>
                    <p className="capitalize">{menu.name}</p>
                  </button>
                );
              })}
            </div>
            <button
              className="bg-gray-200 hover:bg-gray-500 hover:text-white w-full text-start flex gap-4 items-center text-xl px-6 py-2 rounded-full border border-gray-300"
              onClick={() => setModalLogout(!modalLogout)}
            >
              <span className="text-gray-400">
                <Icon component={LogoutOutlined} />
              </span>
              <p className="capitalize">Logout</p>
            </button>
          </div>
        </div>
      )}

      <Modal
        open={modalLogout}
        onCancel={() => setModalLogout(!modalLogout)}
        width={240}
        footer={[]}
      >
        <div className="flex flex-col items-center text-center gap-3 mt-4">
          <ExclamationCircleOutlined className="text-yellow-500 text-2xl" />
          <h1>Are you sure to Logout ?</h1>

          <div className="flex justify-center">
            <Button danger onClick={() => alert("logout success")} size="small">
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default NavbarMobile;
