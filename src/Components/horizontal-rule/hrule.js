import React from "react";
import "./hrule.css"

class HorizontalRule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"hrule-container"}>
                <div className={"hrule"} style={{background: this.props.bg}}/>
            </div>
        );
    }

}

export default HorizontalRule;