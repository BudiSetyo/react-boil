import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NavbarMobile = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const menuData = ["home", "posts", "users"];

  const handleMenu = (dest) => {
    setToggle(!toggle);
    navigate(`/${dest == "home" ? "" : dest}`);
  };

  return (
    <main>
      <div className="h-10 z-20 p-2 flex items-center bg-white shadow-lg sticky inset-x-0 top-0">
        <button className="text-gray-500" onClick={() => setToggle(!toggle)}>
          {toggle ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {toggle && (
        <div
          data-aos="fade-right"
          className="absolute inset-x-0 top-10 bottom-0 bg-white p-2"
        >
          <div className="flex flex-col gap-2 text-gray-800 font-semibold">
            {menuData.map((menu, index) => {
              return (
                <button
                  key={index}
                  className="bg-gray-200 py-1 rounded hover:bg-gray-300"
                  onClick={() => handleMenu(menu)}
                >
                  <p className="capitalize">{menu}</p>
                </button>
              );
            })}
            <button className="bg-gray-200 py-1 rounded hover:bg-gray-300">
              <p className="capitalize">logout</p>
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default NavbarMobile;
