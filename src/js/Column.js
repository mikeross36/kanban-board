import Item from "./Item.js"
import KanbanApi from "./KanbanApi.js"
import DropZone from "./DropZone.js"

class Column {
    constructor(id, title){
        const dropZoneAbove = DropZone.createDropZone()

        this.rangeElements = {}
        this.rangeElements.column = Column.createColumn()
        this.rangeElements.title = this.rangeElements.column.querySelector(".kanban-column-title")
        this.rangeElements.items = this.rangeElements.column.querySelector(".kanban-column-items")
        this.rangeElements.addItemBtn = this.rangeElements.column.querySelector(".add-item-btn")

        this.rangeElements.column.dataset.id = id;
        this.rangeElements.title.textContent = title;

        this.rangeElements.items.appendChild(dropZoneAbove)
        
        this.rangeElements.addItemBtn.addEventListener("click", ()=> {
            const newItem = KanbanApi.addColumnItem(id, "")
            this.renderItem(newItem)
        });

        KanbanApi.getColumnItems(id).forEach(item => {
            this.renderItem(item)
        });
    }

    static createColumn(){
        const range = document.createRange()
        range.selectNode(document.body)
        const tagString = `
            <div class="kanban-column">
                <h2 class="kanban-column-title"></h2>
                <div class="kanban-column-items"></div>
                <button class="add-item-btn" type="button">add</button>
            </div>`;

        return range.createContextualFragment(tagString).children[0]
    }

    renderItem(itemData){
        const item = new Item(itemData.id, itemData.content)
        this.rangeElements.items.appendChild(item.rangeElements.item)
    }
}

export default Column;