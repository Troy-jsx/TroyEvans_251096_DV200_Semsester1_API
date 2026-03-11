import "../App.css";
import {Link} from "react-router-dom";

function navBar(){
    return(
        <nav class="navBar">
            <Link to="/"><div class="NavbarLogo"></div></Link>
            <Link to="/">Home</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/timeline">Timeline</Link>
        </nav>
    );
}

export default navBar;