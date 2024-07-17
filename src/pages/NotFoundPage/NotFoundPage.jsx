import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import '../shared/Footer/Footer'
import Footer from "../shared/Footer/Footer";
const NotFoundPage = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Link to="/">
          <button className="px-6  flex justify-center items-center gap-3 my-5 text-xl py-2 pt-24 text-black">
            <FaArrowLeftLong /> Back To Home
          </button>
        </Link>
        <div className="flex justify-center items-center ">
          <img
            className="w-[80%] object-cover"
            src="https://i.ibb.co/PWq572p/404-page-not-found-256x124.png"
            alt=""
          />
        </div>
          </div>
          <Footer></Footer>
    </div>
  );
};

export default NotFoundPage;
