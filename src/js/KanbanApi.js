"use strict"
import { getDataFromStorage, setDataToStorage, updateColAndPos, updateItemContent } from "./apiHelpers.js"

class KanbanApi {
    static getColumnItems(columnId) {
        const storageData = getDataFromStorage()
        const column = storageData.find(data => {
            return data.id === columnId;
        })
        if (!column) return [];
        return column.items;
    }

    static addColumnItem(columnId, content) {
        const storageData = getDataFromStorage()
        const column = storageData.find(data => {
            return data.id === columnId;
        })
        if (!column) throw new Error("Cannot add item column not found")
        return addNewItem()

        function addNewItem() {
            const newItem = { id: Date.now(), content: content }
            if (newItem) {
                column.items.push(newItem)
                setDataToStorage(storageData)
                return newItem;
            }
        }
    }

    static updateItem(itemId, newProps) {
        const storageData = getDataFromStorage()
        const [item, currColumn] = (() => {
            for (let column of storageData) {
                const item = column.items.find(item => {
                    return item.id === itemId
                })
                if(item) return [item, column]
            }
        })();
        if (!item) throw new Error("Cannot update item not found")
        updateItemContent(item, newProps)
        updateColAndPos(newProps, storageData, currColumn, item)
        setDataToStorage(storageData)
    }

    static deleteColumnItem(itemId) {
        const storageData = getDataFromStorage()
        for (let column of storageData) {
            const item = column.items.find(item => {
                return item.id === itemId;
            })
            if(item) column.items.splice(column.items.indexOf(item), 1)
        }
        setDataToStorage(storageData)
    }
};

export default KanbanApi;