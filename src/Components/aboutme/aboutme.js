import React from "react";
import "./aboutme.css"

class AboutMe extends React.Component {
    render() {
        return (
            <div id={"about-me"} className={"card"}>
                <div><span id={"about-me-title"} className={"card-title"}>About Me</span></div>
                <div className={"card-content"}>
                    <br/>
                    <span id={"about-me-bio"} >
                            Anshuman is from Vellore, Tamil Nadu pursuing his undergraduate degree. He is a full
                            stack developer and loves programming. On his free time, he plays basketball and hangout
                            with his friends.
                    </span></div>
            </div>
        );
    }
}

export default AboutMe;