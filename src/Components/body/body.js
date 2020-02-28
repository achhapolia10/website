import React from "react";
import "./body.css"
import AboutMe from "../aboutme/aboutme";
import HorizontalRule from "../horizontal-rule/hrule";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Footer from "../footer/footer";

class Body extends React.Component {
    render() {
        return (
            <div className={"content"} id={"content"}>
                <AboutMe/>
                <HorizontalRule bg={"#7898fb"}/>
                <Projects/>
                <HorizontalRule bg={"#ffff66"}/>
                <Skills/>
                <Footer/>
            </div>
        );
    }
}

export default Body;