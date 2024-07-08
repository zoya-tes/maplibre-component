/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import 'antd/dist/reset.css'
import { Typography, ConfigProvider } from 'antd'
import './style.scss'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null
    }
  }

  componentDidMount() {
    const mapContainer = document.getElementById('map')
    const mapInstance = new maplibregl.Map({
      container: mapContainer,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 4
    })
    this.setState({ map: mapInstance })
  }

  render() {
    const { Title } = Typography

    return (
      <ConfigProvider theme={{ hashed: false }}>
        <div>
          <Title className='title'>Map</Title>

          <div className='heading'>This is Basic map of maplibre-gl</div>

          <div id='map' style={{ width: '100%', height: '500px' }} />
        </div>
      </ConfigProvider>
    )
  }
}

export default Map
