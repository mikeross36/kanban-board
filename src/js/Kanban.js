"use strict"
import Column from "./Column.js";

class Kanban {
    constructor(kanban){
        this.kanban = kanban;
        const kanbanColumns = Kanban.columns()
        kanbanColumns.forEach(column => {
            const newColumn = new Column(column.id, column.title)
            this.kanban.appendChild(newColumn.rangeElements.column)
        })
    }

    static columns(){
        return [
            {
                id: 1,
                title: "todo"
            },
            {
                id: 2,
                title: "doing"
            },
            {
                id: 3,
                title: "done"
            }
        ]
    }
}

export default Kanban;