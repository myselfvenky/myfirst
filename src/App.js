import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import Videos from "./Pages/Videos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
