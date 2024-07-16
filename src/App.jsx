import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <>
      <div className="w-full h-80"></div>
      <div className="w-full h-80"></div>
      <div className="w-full h-80"></div>
      <div className="flex justify-center">
        <div
          className="bg-blue-500 h-40 w-80"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
        ></div>
      </div>
      <div className="w-full h-80"></div>
      <div className="w-full h-80"></div>
      <div className="w-full h-80"></div>
      <div className="w-full h-80"></div>
      <div className="w-full h-80"></div>
    </>
  );
}

export default App;
