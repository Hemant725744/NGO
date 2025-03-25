import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./pages/events/Event";
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

  return (
    <Router>
      <CustomNavbar /> {/* Use the correct component name */}
      <Event />
      <Routes>
        {/* Define your routes here */}
      </Routes>
    </Router>
  );
}

export default App;
