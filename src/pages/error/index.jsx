import PropTypes from 'prop-types';

// Default images for different error codes
import notFoundImage from '@/assets/404.png';
import serverErrorImage from '@/assets/500.png'; // Add more images as needed

const ErrorPage = ({ errorCode, errorMessage }) => {
  // Select image based on error code
  let errorImage;
  switch (errorCode) {
    case 404:
      errorImage = notFoundImage;
      break;
    case 500:
      errorImage = serverErrorImage;
      break;
    default:
      errorImage = notFoundImage; // Fallback image
  }

  // Define default error message if none is provided
  const defaultMessage =
    errorMessage || 'Sorry, something went wrong. Please try again later.';

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {errorCode || "Error"}
      </h1> */}
      <img
        src={errorImage}
        alt="Error"
        className="w-80 h-80 rounded-full mb-4"
      />
      <p className="text-lg text-gray-600 mb-4">{defaultMessage}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">Back to Home</a>
      </button>
    </div>
  );
};

// Add PropTypes to ensure correct data types for props
ErrorPage.propTypes = {
  errorCode: PropTypes.number,
  errorMessage: PropTypes.string,
};

export default ErrorPage;
