import React, { Component } from 'react';

import './Card.css'
import './Column.css'


class AddColumnButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false
        }
    }

    beginEditMode = () => {
        this.setState({name: 'New column', editMode: true});
    }

    endEditMode = () => {
        this.setState({editMode: false});
    }

    onAccept = () => {
        this.props.createColumn(this.state.name);
        this.endEditMode();
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        let content;
        if (this.state.editMode)
            content = <div className='card'>
                Enter column name
                <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                <input type='button' value='OK' onClick={this.onAccept} />
                <input type='button' value='Cancel' onClick={this.endEditMode} />
            </div>
        else
            content = <div className='card_button' onClick={this.beginEditMode}>
                Add Column...
            </div>

        return <div className='col_empty'>
            {content}
        </div>
    }
}

export default AddColumnButton;