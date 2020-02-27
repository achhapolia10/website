import React from "react";
import "./achievement.css"

class Achievements extends React.Component {
    render() {
        return (
            <div className={"card"} id={"project-card achievement-card"}>
                <div><span className={"card-title"} id={"project-card-title"}>Achievements</span></div>
                <br/>
                <div className={"card-content"}>
                    <div className={"project"}>
                        <div className={"project-row"}>
                            <div className={"achievement-col-title"}>
                                <ul>
                                    <li>VIT Hackathon</li>
                                </ul>
                                <ul>
                                    <li>Access Denied</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Achievements;