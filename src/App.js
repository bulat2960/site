import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import KanbanPage from './Components/Kanban/KanbanPage'


class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <Route exact path="/" component={KanbanPage}/>
            </Router>
        )
    }
}

export default App;
