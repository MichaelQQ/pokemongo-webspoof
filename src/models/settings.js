import { observable } from 'mobx'

export default {
  showArrow: observable(false),
  showSettings: observable(false),
  coordinateSearch: observable(true),
  updateXcodeLocation: observable(false),
  addJitterToMoves: observable(true),
  stationaryUpdates: observable(true),
  speedLimit: observable(4), // ~40-25 km/h
  zoom: observable(17), // map zoom
  showRadar: observable(false)
}
