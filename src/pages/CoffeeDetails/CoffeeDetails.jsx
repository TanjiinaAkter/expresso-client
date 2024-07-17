import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../shared/Footer/Footer";
//import Footer from "../shared/Footer/Footer";
import "./CoffeeDetails.css";
import Footer from "../shared/Footer/Footer";
const CoffeeDetails = () => {
  const detail = useLoaderData();
  const { _id, name, chef, details, taste, category, photo, supplier } = detail;
  return (
    <div className="add-bg ">
      <div className="mx-auto  w-[95%] md:w-[75%]">
        <Link to="/">
          <button className="px-6 flex justify-start items-center gap-3 my-5 text-xl py-2 pt-2 text-black">
            <FaArrowLeftLong /> Back To Home
          </button>
        </Link>
        <div className="flex card py-28 mb-12 flex-col md:flex-row coffee-bg  p-7 justify-center items-center gap-9">
          <div className=" flex ">
            <img className="md:w-[19rem] " src={photo} alt="" />
          </div>
          <div className="flex flex-col px-9 justify-center items-start ">
            <h2 className="text-3xl text-[#331A15] mb-4">Niceties</h2>
            <h2 className="text-xl mb-2">Name: {name}</h2>
            <h2 className="text-xl mb-2">Chef:{chef}</h2>
            <h2 className="text-xl mb-2">Supplier: {supplier}r</h2>
            <h2 className="text-xl mb-2">Taste:{taste}</h2>
            <h2 className="text-xl mb-2">Category: {category}</h2>
            <h2 className="text-xl mb-2">Details: {details}</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CoffeeDetails;
