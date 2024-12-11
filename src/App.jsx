import { Routes, Route } from "react-router";
import MarketPlace from "./pages/MarketPlace.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome</h1>} />
      <Route path="about" element={<About />} />
      <Route path="marketplace" element={<MarketPlace />} />
    </Routes>
  );
}

export default App;
