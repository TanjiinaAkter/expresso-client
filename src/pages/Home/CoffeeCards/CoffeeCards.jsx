import "./CoffeCards.css";
// import img from "../../../assets/images/f-2.webp";
import { Link } from "react-router-dom";
const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, details, taste, category, photo, supplier } = coffee;
  // console.log(_id);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`https://expresso-server-cyan.vercel.app/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remaining = coffees.filter((cof) => cof._id !== _id);
          setCoffees(remaining);
        }
      });
  };
  return (
    <div className="card rounded-none bg-[#F5F4F1] flex-col p-3  md:flex-row justify-between items-center shadow-xl">
      <figure className=" rounded-none flex-1 ">
        <img
          src={photo}
          className="w-[90%] md:w-[7rem] md:h-[7rem] object-cover"
          alt="Shoes"
        />
      </figure>

      <div className="flex flex-1 flex-col pl-2 text-3xl md:text-[23px] gap-3  text-black">
        <p className=""> Name :{name}</p>
        <p>Chef:{chef}</p>
        <p>supplier :{supplier}</p>
      </div>
      <div className="join join-vertical ">
        <Link to={`/coffeeDetails/${coffee._id}`}>
          <button className="btn text-white bg-[#331A15] join-item text-xl my-2 pl-[38px]">
            View
          </button>
        </Link>
        <Link to={`/updateCoffee/${coffee._id}`}>
          <button className="btn text-white bg-[#331A15] join-item text-xl my-2">
            Update
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn text-white bg-[#331A15] join-item text-xl">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCards;
