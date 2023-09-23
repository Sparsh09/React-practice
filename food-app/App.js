import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HeaderElement } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Body } from "./components/Body.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaruntMenu.js";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Shimmer } from "./components/Shimmer.js";

const AppLayout = () => {
  return (
    <React.Fragment>
      <>
        <HeaderElement />
        <Outlet />
        <Footer />
      </>
    </React.Fragment>
  );
};

const Instamart = lazy(() => import("./components/Instamart.js"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
