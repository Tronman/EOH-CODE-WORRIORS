import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CrimeSpots from '../containers/crime-spots'
import Help from '../containers/help'
import HomeScreen from '../containers/home-screen'
import InTheHood from '../containers/in-the-hood'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}/>
    <Route path='/crimeSpots' component={CrimeSpots}/>
    <Route path='/inTheHood' component={InTheHood}/>
    <Route path='/help' component={Help}/>
  </Switch>
)

export default Routes