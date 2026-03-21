import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Compare from './pages/Compare';
import Timeline from "./pages/Timeline";
import NavBar from "./components/navBar";
import Galaxy from "./components/Galaxy";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}> {/*straight from reactbits.dev */}
          <Galaxy
            starSpeed={0.2}
            density={1}
            hueShift={150}
            speed={0.3}
            glowIntensity={0.15}
            saturation={0.3}
            mouseRepulsion
            repulsionStrength={0.1}
            twinkleIntensity={0.15}
            rotationSpeed={0.1}
            transparent={false}
          />
      </div>
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
