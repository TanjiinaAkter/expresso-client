import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../shared/Header/Header";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
const Users = () => {
  const users = useLoaderData();
  const [emails, setEmails] = useState(users);
  // const { email, creationTime, displayName } = users;
  const handleUserDelete = (email) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(email);
          fetch(`https://expresso-server-cyan.vercel.app/users/${email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount) {
                const remaining = emails.filter((em) => em.email !== email);
                setEmails(remaining);
              }
            })
            .catch((error) => {
              console.error(error);
            });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <Header></Header>
      <Link to="/">
        <button className="px-6 md:py-[6rem] flex justify-start items-center gap-3 mt-3 text-xl  text-black">
          <FaArrowLeftLong /> Back To Home :
        </button>
      </Link>
      <h2 className=" text-5xl text-center">Total Users:{users.length}</h2>
      <div className="mx-auto md:w-[70%] mt-5">
        <div className="overflow-x-auto text-2xl">
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr className=" text-white" style={{ background: "#331A15" }}>
                <th className="text-2xl"></th>
                <th className="text-2xl">Email</th>
                <th className="text-2xl">creationTime</th>
                <th className="text-2xl">displayName</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, index) => (
                <tr key={email.email}>
                  <th className="text-2xl">{index + 1}</th>
                  <td className="text-2xl">{email.email}</td>
                  <td className="text-2xl">{email.creationTime}</td>
                  <td className="text-2xl">{email.displayName}</td>
                  <td className="text-2xl">
                    <MdDelete onClick={() => handleUserDelete(email.email)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
