import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";
import useStyles from "./style";
function Map({
  setCoordinates,
  setBound,
  coordinates,
  places,
}) {
  const classes = useStyles();
  const onMobile = useMediaQuery("(min-width:600px)");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCMgE2bP-HNRwUPTlL5utEjqMPUOpLF6GQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBound({ en: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place) => (
          <div lat={Number(place.latitude)} lng={Number(place.longitude)}>
            {onMobile ? (
              <LocationOnOutlinedIcon color="warning" fontSize="medium" />
            ) : (
              <Paper elevation={5}>
                <Typography variant="h4">{place.name}</Typography>
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
