import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '15px',
  marginTop: '15px'
};

const center = {
  lat: 22.324115,
  lng: 91.853418
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDfv9aQI58KZaGfyckjpYAfve80GTLF3xU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)