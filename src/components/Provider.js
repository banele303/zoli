import { Typography, Grid, Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import classes from "../../styles/provider.module.css"
const Provider = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid item sm={10} md={5}>
          <Typography
            varient="h4"
            component="h4"
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textTransform:"bold",
              padding: ".2rem 1rem",
              color: "#3963A0",
              paddingTop:"5rem"
            }}
          >
            TOP CONSTRUCTION AND Civil SERVICES
          </Typography>
          <Typography
            varient="p4"
            component="p4"
           className={classes.provider}
          >
            Malunjwa specializes in a wide variety of work and services
            conveniently covered under one umbrella, enabling us to be  a “One
            Stop provider”
          </Typography>
        </Grid>
        <Grid item sm={10} md={5} justifyContent="center">
        <Button variant="contained" className={classes.button} endIcon={<ArrowRightAltIcon sx={{
            color:" #0D2240",
            width:"3rem",
            transition:".6s ease",
            "&:hover":{
              backgroundColor:"#0D2240 ",
            color:"#D79016",
            }
          

          }}/>} >Contact Us Now </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Provider;
