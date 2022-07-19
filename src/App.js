import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
    // console.log(navigator.geolocation.getCurrentPosition())
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds)
    getPlacesData(bounds?.sw, bounds?.ne)
    .then((data) => {
    
      setPlaces(data)
    })
  
  }, [coordinates, bounds])


  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:"100%"}}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          />
        </Grid>

      </Grid>

    
    </>
  )
}

export default App