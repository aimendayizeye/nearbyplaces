import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar,Button, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style.js';
import { useUserAuth } from '../../contexts/AuthContext.js';
// const useTheme = makeStyles((theme) => ({
  
// }));
const Header = (setCoordinates) => {
  const classes = useStyles()
const [autoComplete,setAutoComplete] = useState(null)
const onLoad =(term)=>{
setAutoComplete(term)
}

const {logOut} = useUserAuth()

const handleLogout=async()=>{
try {
  await logOut()
} catch (error) {
  console.log(error)
}

}
const onPlaceChanged =()=>{
  const lat = autoComplete.getPlace().geometry.location.lat()
  const lng = autoComplete.getPlace().geometry.location.lng()
  setCoordinates({lat,lng})
}
  return (
    <AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.title}>
        Restaurants & Hotels
      </Typography>
      <Box display="flex">
        <Typography variant="h6" className={classes.title}>
        Find
        </Typography>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </div>
        </Autocomplete>
      </Box>
        <Button color="inherit" onClick={handleLogout}>Logout </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;