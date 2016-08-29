import React from 'react'
import { observer } from 'mobx-react'

const Poke = observer(({ number }) => {
  const unit = 96
  const row = 31
  const pokeRow = Math.floor((number - 1) / row)
  const pokeCol = (number - 1) % row
  const left = (pokeCol * unit)
  const top = (pokeRow * unit)

  const inlineStyle = {
    objectPosition: `${-left}px ${-top}px`,
    objectFit: 'none',
    transform: 'scale(0.5)',
    width: `${unit}px`,
    height: `${unit}px`
  }

  return <img alt={ number } src='pokelist.png' style={ inlineStyle } />
})

export default Poke
