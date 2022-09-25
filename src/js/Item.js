"use strict"
import KanbanApi from "./KanbanApi.js";
import DropZone from "./DropZone.js";

class Item {
    constructor(id, content) {
        this.rangeElements = {}
        this.setItem(id)
        this.setItemContent(content)
        this.content = content;
        this.updateItemContent(id)
        this.removeItem(id)
        this.setDropBelow()
        this.setDragAndDrop(id)
    }

    setItem(id) {
        this.rangeElements.item = Item.createItem()
        this.rangeElements.item.dataset.id = id;
    }

    setItemContent(content) {
        const contentEl = this.rangeElements.item.querySelector(".kanban-item-content")
        if (contentEl) {
            this.rangeElements.itemContent = contentEl;
            this.rangeElements.itemContent.textContent = content;
        }
    }

    updateItemContent(id) {
        const updateContent = () => {
            const newContent = this.rangeElements.itemContent.textContent.trim()
            if (newContent === this.content) return;
            this.content = newContent;
            KanbanApi.updateItem(id, {content: this.content})
        }
        this.rangeElements.itemContent.addEventListener("blur", updateContent)
    }

    removeItem(id) {
        this.rangeElements.item.addEventListener("dblclick", () => {
            const check = confirm("Are you sure your want to delete this item?")
            if (check) {
                KanbanApi.deleteColumnItem(id)
                this.rangeElements.itemContent.removeEventListener("blur", this.updateItemContent)
                this.rangeElements.item.parentElement.removeChild(this.rangeElements.item)
            }
        })
    }

    setDropBelow() {
        const dropZoneBelow = DropZone.setDropZone()
        if(dropZoneBelow) this.rangeElements.item.appendChild(dropZoneBelow)
    }

    setDragAndDrop(id) {
        this.rangeElements.item.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", id)
        })
        this.rangeElements.itemContent.addEventListener("drop", e => {
            e.preventDefault()
        })
    }

    static createItem() {
        const range = document.createRange()
        const tagString = `
            <div class="kanban-item" draggable="true">
                <div class="kanban-item-content" contenteditable></div>
            </div>
        `
        if (range) {
            range.selectNode(document.body)
            return range.createContextualFragment(tagString).children[0]
        }
    }
}

export default Item;