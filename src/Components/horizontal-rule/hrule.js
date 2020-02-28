import React from "react";
import "./hrule.css"

class HorizontalRule extends React.Component {

    render() {
        return (
            <div className={"hrule-container"}>
                <div className={"hrule"}/>
            </div>
        );
    }

}

export default HorizontalRule;