import KanbanApi from "./KanbanApi.js"

class DropZone {
    static createDropZone(){
        const range = document.createRange()
        range.selectNode(document.body)

        const tagString = `<div class="kanban-dropzone"></div>`
        const dropZone = range.createContextualFragment(tagString).children[0]

        dropZone.addEventListener("dragover", e => {
            e.preventDefault()
            dropZone.classList.add("kanban-dropzone-active")
        })

        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("kanban-dropzone-active")
        })

        dropZone.addEventListener("drop", e => {
            e.preventDefault()
            dropZone.classList.remove("kanban-dropzone-active")
            const dropZoneColumn = dropZone.closest(".kanban-column")
            const columnId = +dropZoneColumn.dataset.id;

            const dropZonesInColumn = [...dropZoneColumn.querySelectorAll(".kanban-dropzone")]
            const dropZoneIndex = dropZonesInColumn.indexOf(dropZone)

            const itemId = +e.dataTransfer.getData("text/plain")
            const droppedItem = document.querySelector(`[data-id="${itemId}"]`)

            const insertAfter = dropZone.parentElement.classList.contains("kanban-item") ? dropZone.parentElement : dropZone;
      
            if(droppedItem.contains(dropZone)){
                return;
            }
            insertAfter.after(droppedItem)
            KanbanApi.updateItem(itemId, {columnId, position: dropZoneIndex})
        })

        return dropZone;
    }
}

export default DropZone;