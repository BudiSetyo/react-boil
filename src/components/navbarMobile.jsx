import { useState, useEffect } from "react";
import Icon, {
  MenuOutlined,
  CloseOutlined,
  FileAddOutlined,
  LogoutOutlined,
  // HomeOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal, Button, Image } from "antd";
import logo from "../assets/logo.png";

const NavbarMobile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [toggle, setToggle] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const menuData = [
    // { name: "home", icon: HomeOutlined },
    { name: "posts", icon: FileAddOutlined },
    { name: "users", icon: UserOutlined },
  ];

  const handleMenu = (dest) => {
    setToggle(!toggle);
    navigate(`/${dest == "posts" ? "" : dest}`);
  };

  const handleLogout = () => {
    setModalLogout(!modalLogout);
    navigate("/auth");
    localStorage.removeItem("state");
    return localStorage.removeItem("token");
  };

  useEffect(() => {
    setCurrentPage(location.pathname === "/" ? "/posts" : location.pathname);
  }, [location.pathname]);

  return (
    <main className="sticky inset-y-0 inset-x-0 z-50 box-border">
      <div className="absolute z-50 w-full h-10 p-2 flex justify-between items-center bg-gray-100 shadow-lg">
        <Image width={120} src={logo} preview={false} />

        <button
          className="text-gray-500 rounded hover:bg-gray-200 px-1"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      <div
        className={`relative flex -left-full duration-300 ${
          toggle ? "translate-x-full" : ""
        }`}
      >
        <div className="absolute h-screen bg-gray-100 w-full md:w-1/2 flex flex-col justify-between font-semibold text-gray-700 px-2 pt-16 pb-4">
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

        <div
          onClick={() => {
            if (toggle) {
              return setToggle(!toggle);
            }

            return;
          }}
          className={`absolute md:block hidden right-0 h-screen w-full md:w-1/2 ${
            toggle ? "bg-[#00000033]" : ""
          }`}
        />
      </div>

      <Modal
        open={modalLogout}
        onCancel={() => setModalLogout(!modalLogout)}
        width={300}
        footer={[]}
      >
        <div className="flex justify-center items-center gap-4 flex-col">
          <ExclamationCircleOutlined className="text-4xl text-yellow-500" />

          <p className="text-lg">Do you want to logout ?</p>

          <div>
            <Button size="" type="primary" danger onClick={handleLogout}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default NavbarMobile;
