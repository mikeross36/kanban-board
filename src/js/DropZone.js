"use strict"
import KanbanApi from "./KanbanApi.js"

class DropZone {
    static setDropZone() {
        const dropZone = DropZone.createDropZone()
        DropZone.setDrop(dropZone)

        dropZone.addEventListener("drop", e => {
            e.preventDefault()
            dropZone.classList.remove("kanban-dropzone-active")

            const dropZoneColumn = dropZone.closest(".kanban-column")
            const columnId = +dropZoneColumn.dataset.id;

            const dropZonesInColumn = [...dropZoneColumn.querySelectorAll(".kanban-dropzone")]
            const dropZonePosition = dropZonesInColumn.indexOf(dropZone)

            const itemId = +e.dataTransfer.getData("text/plain")
            const dropItem = document.querySelector(`[data-id="${itemId}"]`)

            const dropTarget = dropZone.parentElement.classList.contains("kanban-item") ? dropZone.parentElement : dropZone;
            if (dropItem.contains(dropZone)) return;
            dropTarget.after(dropItem)

            KanbanApi.updateItem(itemId, {columnId: columnId, position: dropZonePosition})
        })

        return dropZone;
    }

    static setDrop(dropZone) {
        dropZone.addEventListener("dragover", e => {
            e.preventDefault()
            dropZone.classList.add("kanban-dropzone-active")
        })
        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("kanban-dropzone-active")
        })
    }

    static createDropZone() {
        const range = document.createRange()
        const tagString = `<div class="kanban-dropzone"></div>`
        if (range) {
            range.selectNode(document.body)
            const dropZone = range.createContextualFragment(tagString).children[0]
            return dropZone;
        }
    }
}

export default DropZone;