import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";

const PageTitle = ({ title = "title", icon = <UserOutlined /> }) => {
  return (
    <div className="w-fit mb-2 shadow px-4 py-1 border flex gap-2 items-center rounded-3xl text-gray-500">
      <p className="text-xl">{icon}</p>

      <h1 className="text-md font-semibold capitalize italic">{title}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
};

export default PageTitle;
