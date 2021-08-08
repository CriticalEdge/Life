export class GameOfLife {
  constructor(width, height) {
    this.height = height
    this.width = width
    this.grid = this.generateGrid()
  }

  generateGrid = () => {
    return new Array(this.height)
      .fill()
      .map(() => new Array(this.width).fill(0))
  }

  fillGridRandom = () => {
    console.log('Randomizing...')
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = Math.round(Math.random() * 0.75) ? 1 : 0
      }
    }
  }

  fillGridWithPattern = () => {
    console.log('Generating...')
    const patternWidth = Math.floor(this.width / 2)
    const patternHeight = Math.floor(this.height / 2)
    const patternWidthStart = Math.floor(this.width / 4)
    const patternHeightStart = Math.floor(this.height / 4)
    const patternWidthEnd = patternWidthStart + patternWidth
    const patternHeightEnd = patternHeightStart + patternHeight
    for (
      let widthIdx = patternWidthStart;
      widthIdx <= patternWidthEnd;
      widthIdx++
    ) {
      for (
        let heightIdx = patternHeightStart;
        heightIdx <= patternHeightEnd;
        heightIdx++
      ) {
        this.grid[heightIdx][widthIdx] =
          widthIdx === patternWidthStart ||
          widthIdx === patternWidthEnd ||
          heightIdx === patternHeightStart ||
          heightIdx === patternHeightEnd
            ? 1
            : 0
        if (widthIdx % 3 === 0) this.grid[widthIdx][heightIdx] = 1
        if (heightIdx % 2 === 1)
          this.grid[heightIdx].fill(patternHeightStart, patternHeightEnd, 1)
      }
    }
  }

  validateNeighbor(row, col) {
    return (
      row >= 0 && row <= this.height - 1 && col >= 0 && col <= this.width - 1
    )
  }

  checkNeighbors = (row, col) => {
    const currentCellIsAlive = this.grid[row][col] === 1 ? true : false
    console.log('currentCellIsAlive', currentCellIsAlive, row, col)
    if (currentCellIsAlive) {
      let leftNeighbor = this.validateNeighbor(row - 1, col)
        ? this.grid[row - 1][col]
        : 0
      let rightNeighbor = this.validateNeighbor(row + 1, col)
        ? this.grid[row + 1][col]
        : 0
      let topNeighbor = this.validateNeighbor(row, col - 1)
        ? this.grid[row][col - 1]
        : 0
      let bottomNeighbor = this.validateNeighbor(row, col + 1)
        ? this.grid[row][col + 1]
        : 0
      let topLeftNeighbor = this.validateNeighbor(row - 1, col - 1)
        ? this.grid[row - 1][col - 1]
        : 0
      let topRightNeighbor = this.validateNeighbor(row - 1, col + 1)
        ? this.grid[row - 1][col + 1]
        : 0
      let bottomRightNeighbor = this.validateNeighbor(row + 1, col - 1)
        ? this.grid[row + 1][col - 1]
        : 0
      let bottomLeftNeighbor = this.validateNeighbor(row + 1, col + 1)
        ? this.grid[row + 1][col + 1]
        : 0
      console.log('neighbors: ', [
        topNeighbor,
        leftNeighbor,
        rightNeighbor,
        bottomNeighbor,
        topLeftNeighbor,
        topRightNeighbor,
        bottomLeftNeighbor,
        bottomRightNeighbor
      ])
      const totalLivingNeighbors =
        leftNeighbor +
        rightNeighbor +
        topNeighbor +
        bottomNeighbor +
        topLeftNeighbor +
        topRightNeighbor +
        bottomRightNeighbor +
        bottomLeftNeighbor
      console.log('livingNeighbors: ', totalLivingNeighbors)
      if (totalLivingNeighbors >= 3 && totalLivingNeighbors <= 5) {
        console.log(`It lives! ${this.grid[row][col]}`)
        return 1
      } else return 0
    } else return 0
  }

  advanceOneGeneration = () => {
    console.log('working...')
    const newGeneration = this.generateGrid
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = this.checkNeighbors(i, j)
      }
    }
    console.log('done!')
  }
}
