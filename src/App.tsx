import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useTheme } from "../src/components/useTheme";
import { About, Contact, Home, Projects, Skills } from "./pages";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Router>
      <header className="bg-header dark:bg-black p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-[10px] ">
        {/* backdrop-blur-sm */}
        <p className="text-3xl font-bold text-text italic">
          CM<span className="text-primary">.</span>
        </p>
        <nav className="flex items-center gap-4 dark:bg-red-300">
          <Link to="/" className="text-text hover:underline hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-text hover:underline">
            About
          </Link>
          <Link to="/projects" className="text-text hover:underline">
            Projects
          </Link>
          <Link to="/skills" className="text-text hover:underline">
            Skills
          </Link>
          <Link to="/contact" className="text-text hover:underline">
            Contact
          </Link>
          <button
            className="p-2 rounded-full cursor-pointer bg-primary"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <MdOutlineLightMode className="text-xl text-white" />
            ) : (
              <MdOutlineDarkMode className="text-xl text-white" />
            )}
          </button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
