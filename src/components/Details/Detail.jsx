import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import {
  Typography,
  CardMedia,
  Card,Box,
  CardContent,
  CardActions,Button
} from "@material-ui/core";
function Detail({ place}) {
// if(selected) refProp?.current?.scrollIntoView({behavior:"smooth"})

  return (
    <div>
      <Card elevation={5}>
        <CardMedia
          style={{ height: 250 }}
          image={place.photo}
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt=""/>
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
 {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" >
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </div>
  );
}
export default Detail;
