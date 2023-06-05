import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'


const mapStyles = {
    width: '50%',
    height: '50%',
  };

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Google Maps Location</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA5QWoYjwjTEz0u1MO4HqZy-3raw7a7o8g' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map