import { human } from "."
import { Ship } from "./ship"

function addGridItem(container,x,y,grid) {
    const gridItem = document.createElement('div')
    if (grid[x][y] != null) gridItem.classList.add('ship')
    gridItem.classList.add('grid-item')
    gridItem.dataset.x = x
    gridItem.dataset.y = y
    container.append(gridItem)
}

// function updateCell(x,y) {
//     console.log(cell)
//     if (cell instanceof Ship) {
//         cell.classList.add('sunk') 
//     } else {
//         cell.classList.add('missed')
//     }
// }

function addClickAttackEvent(human,comp) {
    const container = document.querySelector('#computer-board')
    for (const cell of container.children) {
        if (cell.classList.contains('grid-item')) {
         cell.addEventListener('click', ()=> {
            human.attack(comp.gameboard,cell.dataset.x,cell.dataset.y)
            comp.attackPlayer(human.gameboard)
            if (comp.gameboard.gameOver) {
                alert('end!')
                window.location.reload()
            }
        }, {once:true})
        }
    }
}

export {addGridItem,addClickAttackEvent, updateCell}