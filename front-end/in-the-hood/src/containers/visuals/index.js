import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      reload: true,
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="map">
        <div className="heading" style={{marginBottom: 0}}><Link
          className='icon-back' to='./'/> <span>CRIME SPOTS MAP</span>
        </div>
        <div id="southAfrica"
             style={{width: '1300px', height: '900px', margin: '0 auto'}}/>
      </div>
    )
  }
}