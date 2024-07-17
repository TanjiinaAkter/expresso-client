import { FaArrowLeftLong } from "react-icons/fa6";
import "./AddCoffee.css";
import { Link } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, taste, category, details, photo };
    // console.log(coffee);

    fetch("https://expresso-server-cyan.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <Header></Header>
      <div className="add-bg">
        <div className="mx-auto w-[96%] md:w-[75%]">
          <Link to="/">
            <button className="px-6 flex justify-start items-center gap-3 my-5 text-xl py-2 pt-24 text-black">
              <FaArrowLeftLong /> Back To Home
            </button>
          </Link>
          <div className="form-div rounded-md md:p-3 bg-[#F4F3F0]">
            <h2 className="text-center text-4xl font-semibold py-8">
              Add New Coffee
            </h2>
            <p className="w-[70%] mx-auto text-center font-serif ">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            {/*======================= FORM DESIGN ======================*/}
            <form className="card-body" onSubmit={handleAddCoffee}>
              {/* ROW-1 */}
              <div className="div-1 md:flex md:flex-row gap-2 my-4">
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-xl  font-serif ">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input  text-xl w-full font-serif"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl  font-serif ">
                      Chef
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="chef"
                    name="chef"
                    className="input w-full text-xl font-serif"
                    required
                  />
                </div>
              </div>
              {/* ROW-2 */}
              <div className="div-2 md:flex md:flex-row gap-2 my-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-serif ">
                      Supplier
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="supplier"
                    name="supplier"
                    className="input w-full  text-xl font-serif"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-serif ">
                      Taste
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="taste"
                    name="taste"
                    className="input w-full text-xl font-serif"
                    required
                  />
                </div>
              </div>
              {/* ROW-3*/}
              <div className="div-3 md:flex md:flex-row gap-2 my-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-serif ">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    className="input w-full text-xl font-serif"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-serif ">
                      Details
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="details"
                    name="details"
                    className="input w-full  text-xl font-serif"
                    required
                  />
                </div>
              </div>
              {/* ROW-4 */}
              <div className="div-3 my-4">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-xl  font-serif ">
                      Photo
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo"
                    name="photo"
                    className="input w-full  text-xl font-serif"
                    required
                  />
                </div>
              </div>
              <div className="form-control  mt-6">
                <input
                  type="submit"
                  className="btn bg-[#D2B48C] text-xl"
                  value="Add Coffee"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddCoffee;
