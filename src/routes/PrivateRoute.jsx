import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loader) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) {
    return children;
  }
  // private route component theke state property send kora hoy login page e ...login page er location e jodi state thakea(mane user jodi login er age private route er page e thekechilo tahole user k oi ager page e navigate kora ahoy satte er maddhome...ar noyto direct home page e send kore dey) tahole
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
