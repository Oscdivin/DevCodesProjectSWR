import { createBrowserRouter } from "react-router-dom";
// import LayOut from "../components/common/LayOut";
// import HomeScreen from "../pages/HomeScreen";
// import Register from "../pages/auth/Register";
// import SignIn from "../pages/auth/Signin";
// import PrivateRoute from "./PrivateRoute";
import Layout from "../components/common/Layout";
import HomeScreen from "../page/home/HomeSceen";
import Register from "../page/auth/Register";
import SignIn from "../page/auth/SignIn";
import PrivateRoute from "./PrivateRouter";

export const mainRouter = createBrowserRouter([
  {
    path: "",
    element: (

<PrivateRoute>
        <Layout />
</PrivateRoute>
    ),
    children: [
      {
        path:"/user",
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
