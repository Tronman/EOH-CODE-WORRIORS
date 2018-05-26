import HaversineGeolocation from 'haversine-geolocation'
import * as $ from 'jquery'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AUDIO } from '../../utilities/utilities'
import './styles.css'

let my_location

export default class InTheHood extends Component {
  constructor (props) {
    super(props)

    this.state = {
      distance: 10,
    }
  }

  playSireen () {
    AUDIO.play()
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(my_location)
  }

  componentDidMount () {

    const locationPoints = [
      {
        id: 1,
        title: 'Mall of Africa',
        latitude: -26.0151306,
        longitude: 28.1070721,
      },
      {
        id: 2,
        title: 'Point 2',
        latitude: 51.9971208,
        longitude: 22.1455439,
      },
      {
        id: 3,
        title: 'Point 3',
        latitude: 45.3571207,
        longitude: 30.3435456,
      },
    ]

    const compareDistance = () => {
      HaversineGeolocation.isGeolocationAvailable()
        .then(data => {
          const currentPoint = {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            accuracy: data.coords.accuracy,
          }

          this.setState({
            distance: HaversineGeolocation.getClosestPosition(
              currentPoint,
              locationPoints,
              'mi',
            ).haversine.distance,
          })
        })
    }

    /*    my_location = navigator.geolocation.watchPosition(position => {
            compareDistance()
          }, error => {
            console.log(error)
          },
          {
            enableHighAccuracy: true,
            //timeout: 5000,
            maximumAge: 0,
          })*/

    setTimeout(() => {
      $.ajax({
        type: 'GET',
        url: 'https://pos.cit.api.here.com/positioning/v1/locate?app_id=FYhR9qCVvypldlZKnv3x&app_code=kqRRbIT4-DnBuTO3ERP1ww',
        contentType: 'application/json',
        data: {
          'gsm': [
            {
              'mcc': 262,
              'mnc': 1,
              'lac': 5126,
              'cid': 21857,
            }],
        },
        success: results => {
          console.log(results)
        },
      })
    }, 100)

  }

  render () {
    return (
      <div className="in-the-hood">
        <div className="heading"><Link className='icon-back' to='./'/> <span>IM IN THE HOOD</span>
        </div>
        <div className="danger-area-name">You are heading towards a red
          zone <br/>
          distance to red zone
        </div>
        <div className="distance">{this.state.distance}km</div>
        <div className="danger-area-name">
          Hilbrow an area that has been identified as a hot spot for Inkunzi
        </div>
        <button className="panic-button"
                onClick={this.playSireen.bind(this)}>PANIC BUTTON
        </button>
        <button className="panic-button report-crime">REPORT CRIME</button>
      </div>
    )
  }
}