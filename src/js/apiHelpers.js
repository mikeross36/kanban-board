"use strict"

export function setDataToStorage(kanbanData) {
    localStorage.setItem("kanban-data", JSON.stringify(kanbanData))
}

export function getDataFromStorage() {
    const kanbanData = localStorage.getItem("kanban-data")
    if (!kanbanData) {
        return [
            { id: 1, items: [] },
            { id: 2, items: [] },
            { id: 3, items: [] }
        ]
    }
    return JSON.parse(kanbanData)
}

export function updateItemContent(item, newProps) {
    item.content = newProps.content !== undefined ? newProps.content : item.content;
}

export function updateColAndPos(newProps, storageData, currColumn, item) {
    if (newProps.columnId !== undefined && newProps.position !== undefined) {
        const newColumn = storageData.find(column => {
            return column.id === newProps.columnId;
        })
        if (!newColumn) throw new Error("Cannot update column and position")
        currColumn.items.splice(currColumn.items.indexOf(item), 1)
        newColumn.items.splice(newProps.position, 0, item)
    }
}