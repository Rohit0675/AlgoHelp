import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./pages/Home/Home";
// import SortingVisualizer from "./pages/SortingVisualizer/SortingVisualizer";
import SortingVisualizer from "./pages/Home/SortingVisualizer";
import Bubble from "./pages/Home/Bubble";
import Insertion from "./pages/Home/Insertion";
import Quick from "./pages/Home/Quick";
import Merge from "./pages/Home/Merge";
import Navbar from "./pages/Home/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SortingVisualizer" element={<SortingVisualizer/>} />
        <Route path="/Bubble" element={<Bubble/>} />
        <Route path="/Insertion" element={<Insertion/>} />
        <Route path="/Quick" element={<Quick/>} />
        <Route path="/Merge" element={<Merge/>} />
      </Routes>
    </div>
  );
}

export default App;
