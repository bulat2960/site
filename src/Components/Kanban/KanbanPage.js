import React, { Component } from 'react';
import Kanban from "./Kanban";

import { v4 as uuidv4 } from 'uuid';
import cloneDeep from 'lodash.clonedeep';


class KanbanPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    id: uuidv4(),
                    name: 'TODO',
                    cards: []
                },
                {
                    id: uuidv4(),
                    name: 'In Progress',
                    cards: []
                },
                {
                    id: uuidv4(),
                    name: 'Done',
                    cards: []
                }
            ]
        }
    }

    moveCard = (srcColumnId, srcIndex, destColumnId, destIndex) => {
        let columns = cloneDeep(this.state.columns);

        let srcColumn = columns.find(c => c.id === srcColumnId);
        let card = srcColumn.cards[srcIndex];
        srcColumn.cards = srcColumn.cards.filter(c => c.id !== card.id);

        let destColumn = columns.find(c => c.id === destColumnId);
        destColumn.cards.splice(destIndex, 0, card);

        this.setState({columns: columns});
    }

    createColumn = (name) => {
        let columns = cloneDeep(this.state.columns);
        columns.push({id: uuidv4(), name: name, cards: []})

        this.setState({columns: columns});
    }

    deleteColumn = (id) => {
        let columns = cloneDeep(this.state.columns);
        columns = columns.filter(c => c.id !== id);

        this.setState({columns: columns});
    }

    createCard = (name, columnId) => {
        let columns = cloneDeep(this.state.columns);
        let column = columns.find(c => c.id === columnId);
        column.cards.push({id: uuidv4(), text: name});

        this.setState({columns: columns});
    }

    /*
    deleteCard = (cardId, columnId) => {
        let columns = this.state.columns;
        let columnIndex = columns.findIndex(c => c.id === columnId);
        columns[columnIndex] = columns[columnIndex].cards.filter(c => c.id !== cardId);
        this.setState({columns: columns});
    }
    */

    render() {
        return (
            <div className='kanban'>
                <Kanban
                    key="kanban"
                    state={this.state}
                    moveCard={this.moveCard}
                    createColumn={this.createColumn}
                    deleteColumn={this.deleteColumn}
                    createCard={this.createCard}
                    // deleteCard={this.deleteCard}
                />
            </div>
        )
    }
}

export default KanbanPage;

