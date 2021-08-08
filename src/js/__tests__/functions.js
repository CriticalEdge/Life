import { generateRowsAndColumns, fillRandomCells } from '../functions'

describe('generateRowsAndColumns', () => {
  const generateRandomDimension = () => {
    const num = Math.round(
      Math.random() * (Math.round(Math.random()) ? 10 : 100)
    )
    return num
  }
  let width
  let height
  let grid

  beforeEach(() => {
    width = generateRandomDimension()
    height = generateRandomDimension()
    grid = generateRowsAndColumns(width, height)
  })

  test('Returns a 2-dimensional array', () => {
    const gridWithoutSubarrays = grid.filter((_, i) => !Array.isArray(grid[i]))
    expect(gridWithoutSubarrays).toHaveLength(0)
  })
  test('The main array has a length equal to the given width', () => {
    expect(grid).toHaveLength(width)
  })
  test('The subarrays have a length equal to the given height', () => {
    for (let i = 0; i < grid.length; i++) {
      expect(grid[i]).toHaveLength(height)
    }
  })
})

describe('fillRandomCells', () => {
  test('Fills various cells throughout the multi-dimensional array', () => {
    let grid = generateRowsAndColumns(30, 30)
    let gridWithLivingCells = fillRandomCells(grid)
  })
})
