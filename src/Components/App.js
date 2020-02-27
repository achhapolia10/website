import React from 'react';
import logo from '../logo.svg';
import './css/App.css';
import TopBanner from "./topbanner/topbanner"
import Body from './body/body.js'

class App extends React.Component {
    render() {


        return (
            <div>
                <TopBanner/>
                <Body/>
            </div>
        )

    }

}

export default App;
