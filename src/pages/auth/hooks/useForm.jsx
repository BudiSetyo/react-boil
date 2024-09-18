import { useContext, useState } from "react";
import { StateContext } from "@/context/state.context";
import { login } from "@/apis/auth.api";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const navigate = useNavigate();

  const { state, setState } = useContext(StateContext);

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    login(values.email, values.password)
      .then((res) => {
        setLoading(false);
        setState({ ...state, auth: res.data });

        localStorage.setItem("token", res.data.token);

        message.success(res.message || "Login success");
        return navigate("/");
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
