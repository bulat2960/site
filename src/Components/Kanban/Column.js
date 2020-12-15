import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from './Card'
import AddCardButton from "./AddCardButton";

import './Column.css'


class Column extends Component {
    constructor(props) {
        super(props);
    }

    onClickDeleteButton = () => {
        this.props.deleteColumn(this.props.column.id);
    }

    render () {
        return (
            <div className='column'>
                <div className='column-header'>
                    {this.props.column.name}
                    <input type='button' value='Delete column' onClick={this.onClickDeleteButton}/>
                </div>
                <Droppable droppableId={this.props.column.id}>
                    {
                        (provided) => (
                            <div>
                                <div ref={provided.innerRef} {...provided.droppableProps} {...provided.droppablePlaceholder}>
                                    {
                                        this.props.column.cards.map((c, i) => (
                                                <Card key={c.id}
                                                      index={i}
                                                      card={c}
                                                />
                                            )
                                        )
                                    }
                                </div>
                                {provided.placeholder}
                                <AddCardButton addCard={this.props.createCard}
                                               column={this.props.column.id}
                                />
                            </div>
                        )
                    }
                </Droppable>
            </div>
        )
    }
}

export default Column;