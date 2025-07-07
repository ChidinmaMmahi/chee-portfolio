import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, About, Projects, Skills, Contact } from "./pages";
import { MdOutlineDarkMode } from "react-icons/md";

function App() {
  return (
    <Router>
      <header className="bg-gray-100 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
        <p className="text-3xl font-bold text-gray-600 italic">
          CM<span className="text-green-600">.</span>
        </p>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-500 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-gray-500 hover:underline">
            About
          </Link>
          <Link to="/projects" className="text-gray-500 hover:underline">
            Projects
          </Link>
          <Link to="/skills" className="text-gray-500 hover:underline">
            Skills
          </Link>
          <Link to="/contact" className="text-gray-500 hover:underline">
            Contact
          </Link>
          <div className="hover:bg-green-200 p-2 rounded-full cursor-pointer">
            <MdOutlineDarkMode className="text-xl" />
          </div>
        </nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
