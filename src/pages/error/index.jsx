import notFoundImage from "@/assets/not-found.png"; // replace with your own image

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <img
        src={notFoundImage}
        alt="Not Found"
        className="w-80 h-80 rounded-full mb-4"
      />
      <p className="text-lg text-gray-600 mb-4">
        {"Sorry, the page you're looking for doesn't exist."}
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">Back to Home</a>
      </button>
    </div>
  );
};

export default NotFoundPage;
