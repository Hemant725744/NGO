import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Event from "../src/pages/events/Event";
import Achivment from "../src/pages/Achivment/Achivment";
import Contribute from "../src/pages/contribute/Contribute";
import Contact from "../src/pages/Contact/Contact";
import Teampage from "./pages/Teams/Teampage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Outlet /> {/* This will render the matched child component */}
        </div>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "events",
          element: <Event />
        },
        {
          path: "achievements",
          element: <Achivment />
        },
        {
          path: "contribute",
          element: <Contribute />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "teams",
          element: <Teampage />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;