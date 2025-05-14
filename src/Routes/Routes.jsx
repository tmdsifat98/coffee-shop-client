import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Components/AddCoffee";
import CoffeeView from "../Pages/CoffeeView";
import UpdateCoffes from "../Pages/UpdateCoffes";

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
    ],
  },
]);

export default router;
