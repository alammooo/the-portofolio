import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Loader from "./components/Loader"
import "./index.css"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loadingElement: <Loader />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loadingElement: <Loader />,

        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contacts",
        element: <Contacts />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
