import React from 'react';
import { CssBaseline, Grid } from "@material-ui/core";
import Place from "../components/Places/Place";
import Map from "../components/Map/Map";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { displayAll } from '../apicall/Api';
function Home() {
    const [type, setType] = useState([]);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [bound, setBound] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log(coordinates, bound);
    displayAll(type, bound.sw, bound.ne).then((data) => {
      console.log(data);

      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bound]);
  return (
    <>
      <CssBaseline />
      <Header setCoordinates ={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Place
            typpe={type}
            setType={setType}
            isLoading={isLoading}
            childClicked={childClicked}
            places={places}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setCoordinates={setCoordinates}
            setBound={setBound}
            places={places}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;