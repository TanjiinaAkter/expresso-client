import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Users from "../pages/Users/Users";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://expresso-server-cyan.vercel.app/coffee"),
      },
      {
        path: "/addcoffee",
        element: (
          <PrivateRoute>
            <AddCoffee></AddCoffee>
          </PrivateRoute>
        ),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`https://expresso-server-cyan.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/updateCoffee/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://expresso-server-cyan.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
        loader: () => fetch("https://expresso-server-cyan.vercel.app/users"),
      },
    ],
  },
]);

export default router;
