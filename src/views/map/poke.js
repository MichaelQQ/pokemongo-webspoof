import React from 'react'
import { observer } from 'mobx-react'

const Poke = observer(({ number }) => {
  const unit = 50
  const row = 31
  const bgW = 31 * unit
  const bgH = 21 * unit

  const pokeRow = Math.floor(number / row)
  const pokeCol = (number - 1) % row

  const left = (pokeCol * unit)
  const top = (pokeRow * unit)

  const inlineStyle = {
    background: 'url(pokelist.png)',
    backgroundPosition: `${-left -10}px ${-top -10}px`,
    backgroundSize: `${bgW}px ${bgH}px`,
    width: `${unit - 20}px`,
    height: `${unit - 20}px`
  }

  return <div alt={ number } className='pokeball' style={ inlineStyle }>{ number }</div>
})

export default Poke
