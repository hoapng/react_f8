import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
