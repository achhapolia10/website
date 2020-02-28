import React from "react";
import "./footer.css"
import SocialMedia from "../socialmedia/socialmedia";

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer"}><SocialMedia/></div>
        );
    }
}

export default Footer;