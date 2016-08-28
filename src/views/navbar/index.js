import React from 'react'

import ServerStatus from './server-status.js'
import UserLocationName from './user-location-name.js'
import GithubStar from './github-star.js'
import SettingControl from './setting-control.js'

const Navbar = () =>
  <div className='navbar clearfix'>
    <ServerStatus />
    <UserLocationName />
    <SettingControl />
    <GithubStar />
  </div>

export default Navbar
