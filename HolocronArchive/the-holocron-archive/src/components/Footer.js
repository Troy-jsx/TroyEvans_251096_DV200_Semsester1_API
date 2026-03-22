import "../App.css";
import { NavLink } from "react-router-dom";

function Footer(){
    return (
        <div className="Footer">
            <div className="FooterRow">
                <div className="FooterTagline">
                    <p id="LogoTagline">Exploring a galaxy of data, one API call at a time.</p>
                    <div className="FooterLogo"></div>
                </div>
                
                <div className="FooterNav">
                    <p>Navigation</p>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                    <NavLink to="/compare" className={({ isActive }) => isActive ? "active-link" : ""}>Compare</NavLink>
                    <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""}>Timeline</NavLink>
                </div>

                <div className="FooterNav">
                    <p>External Links</p>
                    <a href="https://swapi.info/" target="_blank" rel="noopener noreferrer">SWAPI Doc</a>
                    <a href="https://www.openwindow.co.za/" target="_blank" rel="noopener noreferrer">Open Window</a>
                </div>
            </div>

            <div className="FooterBottom">
                <p id="tagline">© 2026 · Built at Open Window</p>
                <p id="tagline">Data from SWAPI</p>
            </div>
        </div>
    )
}

export default Footer;