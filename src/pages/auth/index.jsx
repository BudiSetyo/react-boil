import { Image } from "antd";
import Logo from "@/assets/logo.png";
import FormAuth from "./components/form.auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <main className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white min-w-80 py-4 px-8 rounded-lg">
        <div className="flex justify-center pt-6 pb-10">
          <Image width={240} src={Logo} />
        </div>

        <FormAuth />
      </div>
    </main>
  );
};

export default Auth;
