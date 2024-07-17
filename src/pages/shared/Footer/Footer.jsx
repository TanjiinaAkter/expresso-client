import coffee from "../../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-l  ">
      <div className="mx-auto w-[80%]">
        <div>
          <img src={coffee} alt="" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="w-full md:w-1/2">
            <h2 className="text-[29px] md:text-[45px]">Espresso Emporium</h2>
            <p className="text-[20px] my-8">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="icons flex justify-start gap-2">
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
            </div>
            <h2 className="text-[29px] md:text-[45px] my-4">Get in Touch</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-start items-center gap-2 text-[20px]">
                <BsFillTelephoneFill />
                +88 01533 333 333
              </div>
              <div className="flex justify-start items-center gap-2 text-[20px]">
                <MdEmail />
                +88 01533 333 333
              </div>
              <div className="flex justify-start items-center gap-2 text-[20px]">
                <MdLocationOn />
                +88 01533 333 333
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[29px] md:text-[45px] mt-3">Connect with Us</h2>
            <form className="card-body p-0 mt-12 ">
              <div className="form-control">
                <input
                  type="name"
                  placeholder="Name"
                  className="input  text-[20px]"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input my-3 text-[20px]"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  className="textarea text-[20px]  textarea-xs h-32 w-full "></textarea>
              </div>
              <div className="inline-block mt-6">
                <button className="px-3 py-2 mb-4 rounded-full  border-[#764035] border-2 text-[20px]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="bottom-footer text-white text-center py-2 text-2xl">
        Copyright Espresso Emporium ! All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
