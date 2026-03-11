import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Compare from './pages/Compare';
import Timeline from "./pages/Timeline";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar/> {/* The routes and links work even if not in the same file */}
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/compare" element={<Compare/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
