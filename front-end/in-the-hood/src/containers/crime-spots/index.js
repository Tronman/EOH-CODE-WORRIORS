import * as _ from 'lodash'
import React, { Component } from 'react'
import Loader from 'react-loader'
import { Link } from 'react-router-dom'
import { CRIME_DATA_LINK, THREAT_LEVEL } from '../../utilities/utilities'
import './styles.css'

const CrimeItem = ({data}) => (
  <tr className="crime-item">
    <td>
      <div className="crime">{data.crime}</div>
    </td>
    <td>
      <div className="crime">{data.province}</div>
    </td>
    <td>
      <div className="crime">{data.incidents}</div>
    </td>
    <td>
      <div className="threat-level"
           style={{background: THREAT_LEVEL(data.incidents)}}/>
    </td>
  </tr>
)

export default class CrimeSpots extends Component {
  constructor (props) {
    super(props)

    this.state = {
      crimes: [],
      filter_text: '',
      loaded: false,
    }
  }

  searchForCrime (e) {
    e.preventDefault()
    this.setState({
      filter_text: e.target.value,
    })
  }

  componentDidMount () {
    fetch(CRIME_DATA_LINK).then(results => results.json()).then(response => {
      this.setState({
        crimes: response,
        loaded: true,
      })
    })
  }

  render () {
    return (
      <div className="crime-spots">
        <div className="heading" style={{marginBottom: 0}}><Link
  className='icon-back' to='./'/> <span>CRIME SPOTS</span>
        </div>
        <div className="search">
          <input type="text" placeholder='Search spot for crime'
                 onChange={this.searchForCrime.bind(this)}/>
        </div>
        <Loader loaded={this.state.loaded}>
          <table className="crimes-list">
            <thead>
            <tr>
              <th>crime</th>
              <th>province</th>
              <th>incidents</th>
              <th>threat level</th>
            </tr>
            </thead>
            <tbody>
            {
              _.map(_.filter(this.state.crimes,
                item => _.includes(_.toLower(item.crime),
                  _.toLower(this.state.filter_text)) ||
                  _.includes(_.toLower(item.province),
                    _.toLower(this.state.filter_text))),
                (crime, index) => (
                  <CrimeItem data={crime} key={index}/>
                ))
            }
            </tbody>
          </table>
          {this.state.loaded &&
          <div className="no-data">0 Results returned for search
            term: {this.state.filter_text}</div>
          }
        </Loader>
      </div>
    )
  }
}