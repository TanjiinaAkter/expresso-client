import Header from "../shared/Header/Header";
import tea from "../../assets/images/b.png";
import "./Home.css";
import CoffeeCards from "./CoffeeCards/CoffeeCards";
import Footer from "../shared/Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const loadData = useLoaderData();
  console.log(loadData)
  const [coffees, setCoffees] = useState(loadData);
  return (
    <div className="">
      <Header></Header>
      {/*================= BANNER DESIGN ======================= */}
      <div className="banner pt-[6rem]">
        <div className="text-white p-3 text-center  md:w-[50%] md:mx-auto md:right-[11%] md:top-[25%] md:absolute">
          <h2 className="text-[38px]  md:text-6xl my-3 md:my-8">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white text-[20px] md:text-[1.6rem] md:text-2xl mb-3 md:mb-8 ">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div className="">
            <button className="px-5 py-2 bg-[#E3B577] text-black text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/*================= BANNER AFTER DESIGN ======================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-5 bg-[#ECEAE3] md:py-12  px-4 py-4 md:px-[10rem]">
        <div className="text-[#331A15] flex flex-col items-center justify-center">
          <img className="" src={tea} alt="" />
          <h2 className="text-4xl mt-1 mb-2">Awesome Aroma</h2>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div className="text-[#331A15] flex flex-col items-center justify-center">
          <img src={tea} alt="" />
          <h2 className="text-4xl mt-1 mb-2">Awesome Aroma</h2>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div className="text-[#331A15] flex flex-col items-center justify-center">
          <img src={tea} alt="" />
          <h2 className="text-4xl mt-1 mb-2">Awesome Aroma</h2>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div className="text-[#331A15] flex flex-col items-center justify-center">
          <img src={tea} alt="" />
          <h2 className="text-4xl mt-1 mb-2">Awesome Aroma</h2>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
      {/*=================== COFFEE CARDS ALL =========================*/}

      <div className="cards-section space-y-3 mb-12">
        <div className="mx-auto md:w-[82%]">
          <div className="text-center">
            <h3 className="text-[20px] mb-4 mt-7">--- Sip & Savor ---</h3>
            <h2 className="text-[40px] md:text-[55px]">Our Popular Products</h2>
          </div>
          <div className="flex justify-center items-center mb-5">
            <Link to="/addcoffee">
              <button className="px-7 py-2 bg-[#E3B577] text-white rounded-md border-2 border-[#331A15] text-xl">
                Add Coffee
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-[2rem] md:m-0">
            {coffees.map((coffee) => (
              <CoffeeCards key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></CoffeeCards>
            ))}
          </div>
        </div>
      </div>
      {/*====================== FOLLOW US SECTION ====================== */}
      <div className="mx-auto w-[80%] text-center text-[#331A15] ">
        <h2 className="text-2xl">Follow Us Now</h2>
        <h1 className="text-6xl mt-4">Follow on Instagram</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded-md mx-auto w-full my-12">
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
          <img
            className="rounded-md md:h-[12rem] object-cover "
            src="https://i.ibb.co/dtt93mw/f-6.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
    //  {/* BAKI GULOR JONNO PADDING THAKBE */}
    //   {/* <div className="py-12 px-[10rem]"> */}
    //   {/* </div> */}
  );
};

export default Home;
