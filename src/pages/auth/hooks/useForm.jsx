import { useState } from "react";
import { login } from "@/apis/auth.api";
import { message } from "antd";
import useGlobalHooks from "@/hooks";

const useForm = () => {
  const { handlers } = useGlobalHooks();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    login(values.email, values.password)
      .then((res) => {
        setLoading(false);
        handlers.handleAuth(res.data);
        const token = res.data?.token;

        localStorage.setItem("token", token);

        message.success(res.message || "Login success");

        setTimeout(() => (window.location.href = "/"), 1000);
        return;
      })
      .catch((err) => {
        setLoading(false);

        return message.error(err.response.data.message || "Login failed");
      });
  };

  return {
    states: { loading },
    handles: { onFinish },
  };
};

export default useForm;
