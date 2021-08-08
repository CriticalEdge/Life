import React, { useState } from 'react'
import { GameOfLife } from '../../js/functions.js'
import * as styles from './world.module.css'

export default function World() {
  const [gridWidth, setGridWidth] = useState(25) //eslint-disable-line
  const [gridHeight, setGridHeight] = useState(25) //eslint-disable-line
  const gol = new GameOfLife(gridHeight, gridWidth)
  const { grid } = gol
  const [world, setWorld] = useState(grid)

  function oneStep() {
    gol.advanceOneGeneration()
    setWorld(grid)
  }

  function fillRandom() {
    gol.fillGridRandom()
    setWorld(grid)
  }

  return (
    <>
      <h1 className={styles.header}>Welcome to the game of Life!</h1>
      <table className={styles.table}>
        <tbody>
          {world.map((row, i) => {
            return (
              <tr key={i}>
                <th>{i}</th>
                {row.map((isAlive, j) => {
                  return (
                    <td
                      key={j}
                      onClick={(event) => console.log(event.target)}
                      className={`${styles.cell} ${
                        !isAlive ? styles.dead : styles.alive
                      }`}>
                      {j}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={oneStep}>Advance one generation</button>
      <button onClick={fillRandom}>Fill with random pattern</button>
    </>
  )
}
