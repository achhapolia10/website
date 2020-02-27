import React from "react";
import "./projects.css"

class Projects extends React.Component {
    render() {
        return (
            <div className={"card"} id={"project-card"}>
                <div><span className={"card-title"} id={"project-card-title"}>Projects</span></div>
                <br/>
                <div className={"card-content"}>
                    <div className={"project"}>
                        <div className={"project-row"}>
                            <div className={"project-col-title"}>
                                Smoke -h:
                            </div>
                            <div className={"project-col-details"}>
                                An online forum for new programmers to ask queries and get the
                                answers in simple terms.
                            </div>
                        </div>
                        <div className={"project-row"}>
                            <div className={"project-col-title"}>
                                Inventory Manager:
                            </div>
                            <div className={"project-col-details"}>
                                A REST API based inventory management system with a basic UI for
                                data entry and display. The backend was written completely using
                                Golang, the fronted was written using HTML, CSS, JS and used
                                bootstrap for grid layouts and for the database I used MySQL.
                            </div>
                        </div>
                        <div className={"project-row"}>
                            <div className={"project-col-title"}>
                                TrackIt
                            </div>
                            <div className={"project-col-details"}>
                                A GPS based solution to track vehicles uses in logistics. I used
                                firebase to log GPS data sent from the driver’s phone which has
                                our app installed and tracked that on map.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default Projects;