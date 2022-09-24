"use strict"
import "../style/main.scss"
import Kanban from "./Kanban.js"

const kanbanBoard = document.querySelector(".kanban")

new Kanban(kanbanBoard)