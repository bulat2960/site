import React, { Component } from 'react';

import './MainPage.css'


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div id="input-button">
                    <input type="text" name="button"/>
                </div>
            </div>
        )
    }
}

export default MainPage;
