import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Compare from './pages/Compare';
import Timeline from "./pages/Timeline";
import NavBar from "./components/navBar";
import Galaxy from "./components/Galaxy";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}> {/*straight from reactbits.dev */}
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
            rotationSpeed={0.05}
            transparent={false}
          />
      </div>
        
        <div style={{ pointerEvents: "none", position: 'relative', zIndex: 1 }}>
          <NavBar/> {/* The routes and links work even if not in the same file */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/compare" element={<Compare/>}/>
            <Route path="/timeline" element={<Timeline/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
