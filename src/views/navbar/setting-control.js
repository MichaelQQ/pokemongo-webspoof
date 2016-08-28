import React from 'react'
import { observer } from 'mobx-react'

import { showSettings, showArrow } from '../../models/settings.js'

const SettingControl = observer(() => {
  const inlineStyle = {
    float: 'left',
    paddingLeft: '5px'
  }

  const inlineStyle2 = {
    display: 'block',
    margin: 0
  }

  return (
    <div style={inlineStyle} >
      <label style={inlineStyle2} >
        <span>Settings: </span>
        <input
          type='checkbox'
          onChange={ () => showSettings.set(!showSettings.get()) }
        />
      </label>
      <label style={inlineStyle2} >
        <span>Arrow: </span>
        <input
          type='checkbox'
          onChange={ () => showArrow.set(!showArrow.get()) }
        />
      </label>
    </div>
  )
})

export default SettingControl
