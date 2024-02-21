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
        if (cell.classList.contains('grid-item')) {
         cell.addEventListener('click', ()=> {
            human.attack(comp.gameboard,cell.dataset.x,cell.dataset.y)
            comp.attackPlayer(human.gameboard)
            if (comp.gameboard.gameOver || human.gameboard.gameOver) {
                alert('end!')
                window.location.reload()
            }
        }, {once:true})
        }
    }
}

export {addGridItem,addClickAttackEvent,updateCell}