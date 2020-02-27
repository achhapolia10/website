import React from "react";
import "./body.css"
import AboutMe from "../aboutme/aboutme"
import Projects from "../projects/projects";
import Achievements from "../Achievements/achievement";
import Masonry from "react-masonry-css";

class Body extends React.Component {
    render() {
        return (
            <div className={"content"} id={"content"}>
                <Masonry breakpointCols={{default: 2, 768: 1}} columnClassName={"cards"} className={"masonry-grid"}
                >
                    <AboutMe/>
                    <Projects/>
                    <Achievements/>
                </Masonry>
            </div>
        );
    }
}

export default Body;