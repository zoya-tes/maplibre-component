import React, { useState, useEffect } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

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
  return (
    <div>
      <div id='map' style={{ width: '100%', height: '500px' }} />
    </div>
  )
}

export default Map
