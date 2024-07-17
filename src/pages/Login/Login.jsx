import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { FaEyeSlash } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, forgetPassword, logout, google } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(navigate);
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const check = form.check.checked;
    console.log(email, password);

    if (!check) {
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
        title: "accept conditions first",
      });
      return;
    }
    login(email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
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
            title: "verify your email first to login",
          });
          logout();
        } else {
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
            title: "Signed in successfully",
          });
        }
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
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
          title: "invalid credentials",
        });
        console.error(error);
      });
  };
  const emailRef = useRef(null);
  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) {
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
        title: "provide an email",
      });
      return;
    }
    forgetPassword(email)
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
          icon: "info",
          title: "check email for reset password mail",
        });
      })
      .then((error) => {
        console.error(error);
      });
  };

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
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
      <Link to="/users">
        <button className="bg-yellow-500 ml-6 px-5 flex justify-start items-center gap-3 my-3 text-xl py-2 text-black">
          <FaArrowLeftLong /> User List
        </button>
      </Link>
      <div className="mx-auto md:w-[50%] ">
        <h2 className="text-5xl text-center mb-6 ">Sign In Please !!</h2>
        <form
          onSubmit={handleLogin}
          className="card-body bg-[#66342a] rounded-md">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white text-2xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              ref={emailRef}
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
          <div className=" flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <input
                className="text-yellow-400 "
                type="checkbox"
                name="check"
                id="check"
              />
              <p className="  text-xl text-yellow-500">
                Accept our terms and conditions first
              </p>
            </div>
            <label className="label">
              <a
                onClick={handleReset}
                href="#"
                className="label-text-alt  link link-hover text-2xl text-white mt-3">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <input
              className="bg-white text-[#331A15] rounded-2xl py-2 text-2xl"
              type="submit"
              value="Login"
            />
          </div>
          <div className="flex justify-center items-center  mt-4">
            <button
              onClick={handleGoogle}
              className="flex flex-row gap-3 items-center px-4  border-4 border-white text-white text-2xl ">
              <FaGoogle /> Sign In With Google
            </button>
          </div>
          <div className="flex justify-center items-center  my-4 ">
            <p className="text-white text-2xl text-center">
              Not registered yet?
              <Link to="/registration">
                <span className="text-yellow-400 text-2xl">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
