import "../App.css";
import { NavLink } from "react-router-dom";
import TotalSWAPIEntries from "../components/TotalSWAPIEntries";
import Dashboard from "../components/Dashboard";

function Home() {
    return(
        <div> {/* remember this is the main container, the next areas of the home page are to be new divs inside this one */}
            <div className="Home">
                <div className="HeroSection">
                    <div className="HeroPlanet"></div>
                    <div className="HeroText">
                        <div className="HeroTitle">Star Wars Data,<br/>visualised</div>
                        <div className="HeroBody">Compare characters, planets, starships and more, using real Star Wars data.</div>
                        <TotalSWAPIEntries/>
                        <NavLink to="/compare" className="YellowTextBtn">Compare</NavLink>
                    </div>
                </div>
            </div>
            <Dashboard/>
        </div>
    );
}

export default Home;