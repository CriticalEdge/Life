import React, { useState } from 'react'
import { generateRowsAndColumns } from '../../js/functions.js'
import * as styles from './world.module.css'

export default function World() {
  const [living, setLiving] = useState(false)
  const world = generateRowsAndColumns(50, 50)
  return (
    <>
      <p className={styles.header}>Welcome to the game of Life!</p>
      <table className={styles.table}>
        {world.map((row, i) => {
          return (
            <tr key={i} className={styles.tr}>
              {row.map((value, j) => {
                return (
                  <td
                    key={j}
                    onClick={setLiving(!living)}
                    className={
                      living ? styles.living_cell : styles.dead_cell
                    }>
                    {value}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </table>
    </>
  )
}
