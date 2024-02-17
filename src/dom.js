
function addGridItem(container,x,y,grid) {
    const gridItem = document.createElement('div')
    if (grid[x][y] != null) gridItem.classList.add('ship')
    gridItem.classList.add('grid-item')
    gridItem.dataset.x = x
    gridItem.dataset.y = y
    container.append(gridItem)
}

export {addGridItem}