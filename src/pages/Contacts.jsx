import React from 'react';
import Header from '../components/common/Header';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import {MdCall } from 'react-icons/md';
// import {FaFax}from 'react-icons/fa';
require('dotenv').config();
const {MAP_KEY} = process.env;

const Contacts = ({ google, store, index, InfoWindow }) => {
  const mapStyles = {
    width: '700px',
    height: '300px',
  };
  return (
    <div>
      <Header />
      <br/>
      서울시 성북구 개운사길 83-15 1층 앤에이앤　
      <br/>
      <br/>
      {/* <MdCall />  */}
      02-6953-2995
      <br/>
      <br/>
      {/* <FaFax />  */}
      02-6953-2997
      <br/>
      <br/>
      <Map
        google={google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 37.5900378, lng: 127.0269237 }}
      >
        <Marker position={{ lat: 37.5900378, lng: 127.0269237 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCLI_K2Eo2cdlCrlsLmPpLq1mHD7Z7gTuE',
})(Contacts);
