import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';


class Card extends Component {
    render () {
        return <Draggable draggableId={this.props.card.id} index={this.props.index}>
            {
                (provided) => <div className='card' ref={provided.innerRef}
                                   {...provided.dragHandleProps} {...provided.draggableProps}>
                    {this.props.card.text}
                </div>
            }
            <input type='button' value='Delete card' onClick={this.onClickDeleteButton}/>
        </Draggable>
    }
}

export default Card;