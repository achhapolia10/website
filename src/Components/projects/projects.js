import React from "react";
import "./projects.css"

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.smokeh = {
            title: "smoke -h", description: "An online forum for new programmers to ask queries and get the " +
                "answers in simple terms.", anchor: "https://github.com/smoke-trees/forum"
        };
        this.inventory = {
            title: "Inventory Manager",
            description: "A REST API based inventory management system with a basic UI for " +
                "data entry and display. The backend was written completely using " +
                "Golang, the fronted was written using HTML, CSS, JS and used " +
                "bootstrap for grid layouts and for the database I used MySQL.",
            anchor: "https://github.com/achhapolia10/inventory-manager"
        };
        this.trackit = {
            title: "TrackIt", description: "A GPS based solution to track vehicles uses in logistics. I used " +
                "firebase to log GPS data sent from the driver’s phone which has " +
                "our app installed and tracked that on map.", anchor: "https://github.com/achhapolia10/TrackIT"
        };
        this.gesture = {
            title: "Gesture Drive",
            description: "An awesome enhancement to 5th Generation Autonomous " +
                "Vehicles so that even people physically challenged can drive without help.",
            anchor: "https://github.com/lordtt13/Gesture_Drive"
        };
        this.state = {
            selectedProject: "smokeh",
            project: this.smokeh
        }
    }

    buttonClick = (e) => {
        this.setState({selectedProject: e.target.value});
        switch (e.target.value) {
            case "smokeh":
                this.setState({project: this.smokeh});
                break;
            case "inventory":
                this.setState({project: this.inventory});
                break;
            case "gesture":
                this.setState({project: this.gesture});
                break;
            default:
                this.setState({project: this.trackit})
        }
    };

    onChange = (e) => {
        this.setState({selectedProject: e.target.value});
        switch (e.target.value) {
            case "smokeh":
                this.setState({project: this.smokeh});
                break;
            case "inventory":
                this.setState({project: this.inventory});
                break;
            case "gesture":
                this.setState({project: this.gesture});
                break;
            default:
                this.setState({project: this.trackit})
        }
    };

    render() {
        return (
            <div className={"projects-container"}>
                <div className={"projects-container-inside"}>
                    <div className={"projects-title"}>Projects</div>
                    <div className={"projects-selector-desktop"}>
                        <button
                            className={this.state.selectedProject === "smokeh" ? "project-button-selected" : "project-button"}
                            value={"smokeh"} project={this.smokeh} onClick={this.buttonClick}>smoke -h
                        </button>
                        <button
                            className={this.state.selectedProject === "inventory" ? "project-button-selected" : "project-button"}
                            value={"inventory"} onClick={this.buttonClick}>Inventory
                            Manager
                        </button>
                        <button
                            className={this.state.selectedProject === "trackit" ? "project-button-selected" : "project-button"}
                            value={"trackit"} onClick={this.buttonClick}>TrackIt
                        </button>
                        <button
                            className={this.state.selectedProject === "gesture" ? "project-button-selected" : "project-button"}
                            value={"gesture"} onClick={this.buttonClick}>Gesture
                            Drive
                        </button>
                    </div>
                    <div className={"projects-selector-mobile"}>
                        <select className={"project-selector-dropdown"} value={this.state.selectedProject}
                                onChange={this.onChange}>
                            <option value={"smokeh"}>smoke -h</option>
                            <option value={"inventory"}>Inventory Manager</option>
                            <option value={"trackit"}>TrackIt</option>
                            <option value={"gesture"}>Gesture Drive</option>
                        </select>
                    </div>

                    <div className={"project-card"}>
                        <div className={"project-card-container"}>
                            <div className={"project-card-title"}>
                                <a className={"project-title-anchor"} href={this.state.project.anchor}
                                   target={"_blank"}>
                                    <div className={"project-title"}>{this.state.project.title}</div>
                                </a>
                            </div>
                            <div className={"project-card-description"}>
                                <div className={"project-description"}>{this.state.project.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;