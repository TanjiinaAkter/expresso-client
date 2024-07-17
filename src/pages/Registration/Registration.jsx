import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { sendEmailVerification, updateProfile } from "firebase/auth";
const Registration = () => {
  const { register } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const user = { email, password };
    console.log(user);

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "please provide an valid email ",
      });
      return;
    } else if (password.length < 6) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "please provide a password of 6 or more than 6 character ",
      });
      return;
    } else if (!/^(?=.*[A-Z]).*$/.test(password)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "please provide a password atleast 1 capital letter",
      });
      return;
    } else if (!/^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/.test(password)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "please provide a password atleast 1 special character",
      });
      return;
    }

    register(email, password)
      .then((result) => {
        console.log(result.user);

        // =================== email varification =====================//

        sendEmailVerification(result.user)
          .then(() => {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "please verify your email and check email",
            });
          })
          .catch((error) => {
            console.error(error);
          });
        //============== USER PROFILE UPDATE =================//

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // console.log(result.user.displayName);
            const creationTime = result.user.metadata.creationTime;
            const email = result.user.email;
            const displayName = result.user.displayName;
            console.log(displayName);
            const user = {
              email,
              creationTime,
              displayName,
            };

            console.log(user);

            fetch("https://expresso-server-cyan.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((error) => {
            console.error(error);
          });
        // =================== user create  for show in a table=====================//

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Registered successfully",
        });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Link to="/">
        <button className="px-6 flex justify-start items-center gap-3 my-3 text-xl py-2 text-black">
          <FaArrowLeftLong /> Back To Home
        </button>
      </Link>
      <div className="mx-auto md:w-[50%] ">
        <h2 className="text-5xl text-center mb-6 ">Register Please !!</h2>
        <form
          onSubmit={handleRegister}
          className="card-body bg-[#66342a] rounded-md pb-[1rem]">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white text-2xl">First name</span>
            </label>
            <input
              type="text"
              placeholder="first name"
              name="name"
              className="input rounded-none input-bordered text-2xl "
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white text-2xl">Last name</span>
            </label>
            <input
              type="text"
              placeholder="last name"
              className="input rounded-none input-bordered text-2xl "
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white text-2xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input rounded-none input-bordered text-2xl "
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white text-2xl">Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input rounded-none input-bordered text-2xl "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" label-text text-white text-2xl">Password</span>
            </label>
            <div className="flex justify-between items-center relative">
              <input
                type={show ? "password" : "text"}
                placeholder="password"
                name="password"
                className="input rounded-none input-bordered text-2xl w-full"
                required
              />
              <span onClick={() => setShow(!show)}>
                {show ? (
                  <FaEyeSlash className="absolute top-4 right-4 text-2xl" />
                ) : (
                  <FaEye className="absolute top-4 right-4 text-2xl" />
                )}
              </span>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" label-text text-white text-2xl">
                Confirm Password
              </span>
            </label>
            <div className="flex justify-between items-center relative">
              <input
                type="password"
                placeholder="password"
                className="input rounded-none input-bordered text-2xl w-full"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="bg-white text-[#331A15] rounded-2xl py-2 text-2xl"
              type="submit"
              value="Register"
            />
          </div>
          <div className="flex justify-center items-center  my-4 ">
            <p className="text-white text-2xl text-center">
              Already registered ? Please
              <Link to="/login">
                <span className="text-yellow-400 text-2xl pl-2">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
