import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default class HomeScreen extends Component {
  render () {
    return (
      <div className="home-screen">
        <div className="logo"/>
        <div className="buttons">
          <Link to='/crimeSpots'>crime spots</Link>
          <Link to='/inTheHood'>in the hood</Link>
          <Link to='/help'>i need help</Link>
        </div>
      </div>
    )
  }
}