import "../App.css";
import { NavLink } from "react-router-dom";

function navBar(){
    return(
        <nav class="navBar">
            <NavLink to="/"><div class="NavbarLogo"></div></NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            <NavLink to="/compare" className={({ isActive }) => isActive ? "active-link" : ""}>Compare</NavLink>
            <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""}>Timeline</NavLink>
            {/* NavLink has a property that can tell us if the link is the currently selected one,
            i used this to create the hover/active states*/}
        </nav>
    );
}

export default navBar;