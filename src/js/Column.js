"use strict"
import Item from "./Item.js"
import KanbanApi from "./KanbanApi.js"
import DropZone from "./DropZone.js"

class Column {
    constructor(id, title) {
        this.rangeElements = {}
        this.setColumn(id)
        this.setTitle(title)
        this.setColumnItems()
        this.setAddItemBtn()

        this.setDropAbove()
        this.addNewItem(id)
        this.setKanbanApi(id)
    }

    setColumn(id) {
        this.rangeElements.column = Column.createColumn()
        this.rangeElements.column.dataset.id = id;
    }

    setTitle(title) {
        const titleEl = this.rangeElements.column.querySelector(".kanban-column-title")
        if (titleEl) {
            this.rangeElements.title = titleEl;
            this.rangeElements.title.textContent = title;
        }
    }

    setColumnItems() {
        const itemsEl = this.rangeElements.column.querySelector(".kanban-column-items")
        if (itemsEl) this.rangeElements.items = itemsEl;
    }

    setAddItemBtn() {
        const btnEl = this.rangeElements.column.querySelector(".add-item-btn")
        if (btnEl) this.rangeElements.addItemBtn = btnEl;
    }

    renderItem(props) {
        const item = new Item(props.id, props.content)
        if (item) this.rangeElements.items.appendChild(item.rangeElements.item)
    }

    setKanbanApi(id) {
        const columnItems = KanbanApi.getColumnItems(id)
        if(columnItems) columnItems.forEach(item => this.renderItem(item))
    }

    addNewItem(id) {
        this.rangeElements.addItemBtn.addEventListener("click", () => {
            const newItem = KanbanApi.addColumnItem(id, "")
            if(newItem) this.renderItem(newItem)
        })
    }

    setDropAbove() {
        const dropZoneAbove = DropZone.setDropZone()
        if(dropZoneAbove) this.rangeElements.items.appendChild(dropZoneAbove)
    }

    static createColumn() {
        const range = document.createRange()
        const tagString = `
            <div class="kanban-column">
                <h2 class="kanban-column-title"></h2>
                <div class="kanban-column-items"></div>
                <button class="add-item-btn" type="button">add</button>
            </div>
        `
        if (range) {
            range.selectNode(document.body)
            return range.createContextualFragment(tagString).children[0]
        }
    }
}

export default Column;