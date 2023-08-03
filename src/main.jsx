import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar/Navbar.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import { Search } from "./pages/Search/Search.jsx";
import { Home } from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
    <Outlet />
  </React.StrictMode>
);
