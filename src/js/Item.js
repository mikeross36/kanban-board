import KanbanApi from "./KanbanApi.js";
import DropZone from "./DropZone.js";

class Item {
    constructor(id, content){
        const dropZoneBelowe = DropZone.createDropZone()

        this.rangeElements = {}
        this.rangeElements.item = Item.createItem()
        this.rangeElements.itemInput = this.rangeElements.item.querySelector(".kanban-item-input")
        this.rangeElements.item.dataset.id = id;
        this.rangeElements.itemInput.textContent = content;
        this.content = content;

        this.rangeElements.item.appendChild(dropZoneBelowe)

        const updateItemsContent = () => {
            const newContent = this.rangeElements.itemInput.textContent.trim()
            if(newContent === this.content){
                return;
            }
            this.content = newContent;
            KanbanApi.updateItem(id, {content: this.content})
        };
        this.rangeElements.itemInput.addEventListener("blur", updateItemsContent)

        this.rangeElements.item.addEventListener("dblclick", ()=> {
            const check = confirm("Are you sure sou want to delete this item?")
            if(check){
                KanbanApi.deleteItem(id)
                this.rangeElements.itemInput.removeEventListener("blur", updateItemsContent)
                this.rangeElements.item.parentElement.removeChild(this.rangeElements.item)
            }
        })

        this.rangeElements.item.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", id) 
        })
  
        this.rangeElements.itemInput.addEventListener("drop", e => {
            e.preventDefault() 
        })
    }

    static createItem(){
        const range = document.createRange()
        range.selectNode(document.body)
        const tagString = `
            <div class="kanban-item" draggable="true">
                <div class="kanban-item-input" contenteditable></div>
            </div>`;

        return range.createContextualFragment(tagString).children[0]
    }
}

export default Item;