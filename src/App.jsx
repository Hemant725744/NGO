import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <CustomNavbar /> {/* Use the correct component name */}
      <Routes>
        {/* Define your routes here */}
      </Routes>
    </Router>
  );
}

export default App;
