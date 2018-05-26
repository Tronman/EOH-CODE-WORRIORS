import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Help extends Component {
  render () {
    return (
      <div className="help">
        <div className="heading"><Link className='icon-back' to='./'/> <span>HELP</span>
        </div>
      </div>
    )
  }
}