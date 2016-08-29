import { observable } from 'mobx'
import axios from 'axios'
import Alert from 'react-s-alert'

import { showRadar } from './settings.js'
import userLocation from './user-location.js'

const pokeList = observable([])

const pokeRadar = async (lat, lng, radius) => {
  console.log('Lat Lng', lat, lng)
  try {

    pokeList.replace(data.pokemons)
  } catch (err) {
    Alert.error(`
      <strong>radar server error</strong>
      <div class='stack'>${err}</div>
    `)
  }
}

const scheduleUpdate = async () => {
  if (showRadar.get()) {
    await pokeRadar(userLocation[0], userLocation[1], 0.009)
  }

  // check again in 30 seconds
  window.setTimeout(() => scheduleUpdate(), 30 * 1000)
}

scheduleUpdate()

export default { pokeList }
