import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";

import AddColumnButton from "./AddColumnButton";
import Column from "./Column";

import './Kanban.css'


class Kanban extends Component {
    constructor(props) {
        super(props)
        this.onDragEnd = this.onDragEnd.bind(this)
    }
    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        this.props.moveCard(result.source.droppableId, result.source.index,
                            result.destination.droppableId, result.destination.index)
    }
    render () {
        return (
            <div className='kanban'>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    {
                        this.props.state.columns.map((c) => <Column key={c.id} column={c}
                                                                    createCard={this.props.createCard}
                                                                    deleteColumn={this.props.deleteColumn}
                                                            />)
                    }
                </DragDropContext>
                <AddColumnButton createColumn={this.props.createColumn}/>
            </div>
        )
    }
}

export default Kanban;