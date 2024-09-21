import PropTypes from "prop-types";

const PageTitle = ({ title = "title" }) => {
  return (
    <div className="rounded-r-xl w-fit pl-2 pr-4 mb-6 shadow bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500">
      <h1 className="text-xl font-bold uppercase font-mono">{title}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
