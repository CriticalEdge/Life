import { generateRowsAndColumns } from '../functions'

describe('generateRowsAndColumns', () => {
  const randomDimension = () => {
    const num = Math.round(
      Math.random() * (Math.round(Math.random()) ? 10 : 100)
    )
    return num
  }
  let width
  let height
  let grid

  beforeEach(() => {
    width = randomDimension()
    height = randomDimension()
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
