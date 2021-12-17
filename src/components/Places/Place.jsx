import React from "react";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./style";
import Detail from "../Details/Detail";

function Place({ places,childClicked,isLoading ,type,setType}) {
  const classes = useStyles();
  const handleChange = (e) => {
    setType(e.target.value);
  };
  return (
  
    <div className={classes.container}>
      <Typography variant="h6">

        Find your prefered Restaurant not far from you!
      </Typography>
      {isLoading?(
        <div className={classes.loading}>
<CircularProgress/>
        </div>
      ):(
      <>
      <FormControl className={classes.formControl}>
        <InputLabel>Find</InputLabel>
        <Select value={type} onChange={handleChange}>
          <MenuItem value="restaurants">Restaurant</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <Detail  place={place} />
          </Grid>
        ))}
      </Grid>
      )
      </>
      )}
    </div>
  );
}

export default Place;
