import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components";
import { Footer } from "./components";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <Router>
      <Header
        onAnimationComplete={() => setShowContent(true)}
        showContent={showContent}
      />

      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="overflow-hidden"
        >
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </motion.div>
      )}
    </Router>
  );
}

export default App;
