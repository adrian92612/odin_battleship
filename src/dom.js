import { startTurn } from "./game"
import { Player } from "./player"

function addGridItem(container,x,y,grid) {
    const gridItem = document.createElement('div')
    if (grid[x][y] != null) gridItem.classList.add('ship')
    if (container.id === 'computer-board') gridItem.classList.add('compShip')
    gridItem.classList.add('grid-item')
    gridItem.dataset.x = x
    gridItem.dataset.y = y
    gridItem.dataset.c = container.id
    container.append(gridItem)
    return gridItem
}

function updateCell(cell){
    cell.classList.contains('ship') ? cell.classList.add('sunk') :cell.classList.add('missed')
}

function addClickAttackEvent(human,comp) {
    const container = document.querySelector('#computer-board')
    for (const cell of container.children) {
         cell.addEventListener('click', ()=> startTurn(human,comp,cell), {once:true})
    }
}

function getPlayerName() {
    const form = document.querySelector('.player-name')
    const name = document.querySelector('#name')
    const nameTag = document.querySelector('#name-tag')
    const appContainer = document.querySelector('#app')
    return new Promise((res,rej)=> {
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            form.classList.add('hide-form')
            appContainer.removeAttribute('style')
            nameTag.innerText = name.value
            res(name.value)
        })
    })
}

export {addGridItem,addClickAttackEvent,updateCell,getPlayerName}