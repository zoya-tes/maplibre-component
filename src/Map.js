import React, { useState, useEffect } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Typography } from 'antd'
import './Map.scss'

const Map = () => {
  const [map, setMap] = useState(null)

  useEffect(() => {
    const mapContainer = document.getElementById('map')
    const mapInstance = new maplibregl.Map({
      container: mapContainer,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 4
    })
    setMap(mapInstance)
  }, [])
  const { Title } = Typography

  return (
    <div>
      <Title className="title">Map</Title>
      <div className="heading">This is Basic map of maplibre-gl</div>
      <div
        className='mapBorder'
        id='map'
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  )
}

export default Map
