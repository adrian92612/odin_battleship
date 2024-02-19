import { human } from "."

function addGridItem(container,x,y,grid) {
    const gridItem = document.createElement('div')
    if (grid[x][y] != null) gridItem.classList.add('ship')
    gridItem.classList.add('grid-item')
    gridItem.dataset.x = x
    gridItem.dataset.y = y
    container.append(gridItem)
}

function addClickAttackEvent(container) {
    for (const block of container.children) {
        if (block.classList.contains('grid-item')) {
         block.addEventListener('click', ()=> {
            console.log(block)
        }, {once:true})
        }
    }
}

export {addGridItem,addClickAttackEvent}