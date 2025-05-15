import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Components/AddCoffee";
import CoffeeView from "../Pages/CoffeeView";
import UpdateCoffes from "../Pages/UpdateCoffes";
import AuthLayout from "../Layouts/AuthLayout";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Users from "../Components/Users";
import UserDetails from "../Pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      { path: "/addCoffee", Component: AddCoffee },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeView,
      },
      {
        path: "/updateCoffe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffes,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserDetails,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/signup", Component: SignUp },
      { path: "/auth/signin", Component: SignIn },
    ],
  },
]);

export default router;
