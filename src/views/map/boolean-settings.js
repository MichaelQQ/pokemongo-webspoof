import React from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'

import {
  coordinateSearch,
  addJitterToMoves,
  stationaryUpdates,
  updateXcodeLocation,
  showRadar
} from '../../models/settings.js'

const settings = [
  [ coordinateSearch, 'coordinate search' ],
  [ addJitterToMoves, 'Add randomness to moves' ],
  [ stationaryUpdates, 'Update even when stationary' ],
  [ updateXcodeLocation, 'Auto update Xcode location' ],
  [ showRadar, 'show Radar' ]
]

const BooleanSettings = observer(() =>
  <div className='boolean-settings'>
    { settings.map(([ setting, label ], idx) =>
      <div
        key={ idx }
        onClick={ () => setting.set(!setting.get()) }
        className={ cx('btn btn-sm', {
          'btn-primary': setting.get(),
          'btn-secondary': !setting.get()
        }) }>
        { label }
      </div>
    ) }
  </div>
)

export default BooleanSettings
