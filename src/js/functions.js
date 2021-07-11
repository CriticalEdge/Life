export const generateRowsAndColumns = (width, height) => {
  const grid = new Array(width)
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(height)
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = 0
    }
  }
  return grid
}

export const toggleCell = (grid, i, j) => {
  grid[i][j] = grid[i][j] ? 0 : 1
}
