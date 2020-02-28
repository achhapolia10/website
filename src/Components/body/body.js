import React from "react";
import "./body.css"
import AboutMe from "../aboutme/aboutme";
import HorizontalRule from "../horizontal-rule/hrule";

class Body extends React.Component {
    render() {
        return (
            <div className={"content"} id={"content"}>
                <AboutMe/>
                <HorizontalRule/>
            </div>
        );
    }
}

export default Body;