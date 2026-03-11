import './App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Compare from './pages/Compare';
import Timeline from "./pages/Timeline";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/compare">Compare</Link> |
          <Link to="/timeline">Timeline</Link>
        </nav>
        
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
