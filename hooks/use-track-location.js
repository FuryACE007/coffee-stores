import React, {useState} from 'react';

const UseTrackLocation = () => {
    const [locationErrorMessage, setLocationErrorMessage] = useState('');

    const success = (position) => {
        const {latitude, longitude} = position.coords;
        console.log(`Latitude is ${latitude} and longitude is ${longitude}`);
    }

    const error = (error) => {

    }

    const handleTrackLocation = () => {
        if(!navigator.geolocation) {
            setLocationErrorMessage('Geolocation is not supported by your browser');
          } else {
            // status.textContent = 'Locating…';
            navigator.geolocation.getCurrentPosition(success, error);
          }
    }

  return (
    <div></div>
  )
}

export default UseTrackLocation;