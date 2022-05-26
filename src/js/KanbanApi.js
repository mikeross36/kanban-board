// import {v4 as uuidv4} from uuidv4;
class KanbanApi {

    static getColumnItems(columnId){
        const column = getDataFromStorage().find(column => {
            return column.id === columnId;
        })

        if(!column){
            return [];
        }
        return column.items;
    }

    static addColumnItem(columnId, content){
        const data = getDataFromStorage()
        const column = data.find(column => {
            return column.id === columnId
        })
        const item = {
            id: Math.floor(Math.random()*100000),
            content: content
        };

        if(!column){
            throw new Error("Column not found!")
        }
        column.items.push(item)
        setDataToStorage(data)
        return item;
    }

    static updateItem(itemId, newProps){
        const data = getDataFromStorage()
        const [item, currColumn] = (()=> {
            for(let column of data){
                const item = column.items.find(item => {
                    return item.id === itemId;
                })
                if(item){
                    return [item, column]
                }
            }
        })();
        
        if(!item){
            throw new Error("Item not found!")
        }
        updateContent(item, newProps)
        updateColAndPos(newProps, data, currColumn, item)
        setDataToStorage(data)
    }

    static deleteItem(itemId){
        const data = getDataFromStorage()
        for(let column of data){
            const item = column.items.find(item => {
                return item.id === itemId;
            })
            if(item){
                column.items.splice(column.items.indexOf(item), 1)
            }
        }
        setDataToStorage(data)
    }
}

const setDataToStorage = kanbanData => {
    localStorage.setItem("kanban-data", JSON.stringify(kanbanData))
};

const getDataFromStorage = () => {
    const kanbanData = localStorage.getItem("kanban-data")

    if(!kanbanData){
        return [{id:1,items:[]},{id:2,items:[]},{id:3,items:[]}]
    }
    return JSON.parse(kanbanData)
};

const updateContent = (item, newProps) => {
    item.content = newProps.content === undefined ? item.content : newProps.content;
};

const updateColAndPos = (newProps, data, currColumn, item) => {
    if(newProps.columnId !== undefined && newProps.position !== undefined){
        const newColumn = data.find(column => {
            return column.id === newProps.columnId;
        })

        if(!newColumn){
            throw new Error("Column not found!")
        }
        currColumn.items.splice(currColumn.items.indexOf(item), 1)
        newColumn.items.splice(newProps.position, 0, item)
    }
};

export default KanbanApi;