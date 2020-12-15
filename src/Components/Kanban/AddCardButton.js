import React, { Component } from 'react';

import './Card.css'

class AddCardButton extends Component {
    constructor(props) {
        super(props)
        this.state = {editMode: false}
    }

    beginEditMode = () => { this.setState({name: 'New card', editMode: true}); }
    endEditMode = () => { this.setState({editMode: false}); }

    onAccept = () => {
        this.props.addCard(this.state.name, this.props.column);
        this.endEditMode();
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        let content;
        if (this.state.editMode)
            content = <div className='card'>
                Enter card name
                <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                <input type='button' value='OK' onClick={this.onAccept} />
                <input type='button' value='Cancel' onClick={this.endEditMode} />
            </div>
        else
            content = <div className='card_button' onClick={this.beginEditMode}>
                Add Card...
            </div>

        return <div className='card_empty'>
            {content}
        </div>
    }
}

export default AddCardButton;