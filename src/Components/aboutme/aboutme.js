import React from "react";
import "./aboutme.css"
import pp from "./pp.jpeg"

class AboutMe extends React.Component {
    render() {
        return (
            <div id={"about-me"}>
                <div className={"about-empty-wrapper"}>
                    <div className={"about-me-empty-1"}/>
                </div>
                <div id={"about-me-card"}>
                    <p>
                        <img id={"about-me-image"} src={pp}/>
                    </p>
                    <p><span id={"about-me-heading"}>I'm Anshuman Chhapolia.</span></p>
                    <p><span id={"about-me-content"}>I am a Full-Stack Developer. I love programming.</span></p>
                </div>
                <div className={"about-empty-wrapper"}>
                    <div className={"about-me-empty-2"}/>
                </div>
            </div>
        );
    }
}

export default AboutMe;