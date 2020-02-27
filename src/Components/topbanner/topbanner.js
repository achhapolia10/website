import React from "react";
import SocialMedia from "../socialmedia/socialmedia"
import "./topbanner.css"

class TopBanner extends React.Component {
    render = () => {
        return (
            <div id={"top-banner"}>
                <div id={"nametag"} style={{display: "inline"}}>
                    <span id={"name-text"}>Anshuman Chhapolia</span>
                </div>
                <SocialMedia/>
            </div>
        );
    }
}

export default TopBanner;
