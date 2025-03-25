import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/home";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar"; // If you have a Navbar
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap Import

function App() {
  return (
    <Router>
      <Navbar /> {/* Global Navbar */}
      <Routes>
      <Route path="/" element={<Home />} />
        {/* Add other pages like About, Contact, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
