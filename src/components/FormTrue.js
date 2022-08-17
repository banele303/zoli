import classes from "../../styles/Form.module.css";
import { Grid, Button, TextField, Typography, Stack } from "@mui/material";
import React from "react";

import logo from "../../public/imagelo.png";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from "@mui/icons-material/Email";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import FaxIcon from "@mui/icons-material/Fax";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";


const FormTrue = () => {
  return (
    <div className={classes.form}>
      <Grid container justifyContent="center">
        <Grid item sm={10} md={3} lg={4}>
          <div className={classes.links}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "22px",
                diplay: "flex",
                textAlign: "center",
                fontWeight: "500",
                cursor: "pointer",
                paddingBottom: "1rem",
                color: "#D79016",
              }}
            >
              Contact Us
            </Typography>
            <Stack
              variant="text"
              startIcon={<EmailIcon />}
              sx={{
                color: "#D79016",
                "&:hover": {
                  color: "#F77E21",
                },
              }}
            >
              admin@malunjwa.co.za
            </Stack>
            <Button
              variant="text"
              startIcon={<EditLocationIcon />}
              sx={{
                color: "#D79016",
                "&:hover": {
                  color: "#F77E21",
                },
              }}
            >
              43 amanda avenue
            </Button>
            <Button
              variant="text"
              startIcon={<PhoneMissedIcon />}
              sx={{
                color: "#D79016",
                "&:hover": {
                  color: "#F77E21",
                },
              }}
            >
              +27 834 667 675
            </Button>
            <Button
              variant="text"
              startIcon={<FaxIcon />}
              sx={{
                color: "#D79016",
                "&:hover": {
                  color: "#F77E21",
                },
              }}
            >
              +27 884 448 616
            </Button>
          </div>
        </Grid>
        <Grid item sm={5} md={6} justifyContent="center">
          <div className={classes.inputs}>
            <form>
              <TextField sx={{
                margin:'1.3rem 1rem',
                width:"300px"
               }} label="Name" placeholder="Enter your name" />
              <TextField sx={{
                margin:'1.3rem 1rem',
                width:"300px"
               }}
               label="Email" placeholder="Enter your email" />
              <TextField
               sx={{
                margin:'1.3rem 1rem',
                width:"300px"
               }}
             
                multiline
                rows={3}
                defaultValue="message"
              />
              <Button variant="contained" endIcon={<SendIcon sx={{
            color:"#0D2240",
            width:"3rem",
            transition:".6s ease",
            "&:hover":{
              backgroundColor:" #0D2240",
            color:"#D79016",
            }
          

          }}/>} sx={{
            backgroundColor:"#D79016",
            color:"#0D2240",
            padding:"16px 29px",
            fontSize:"18px",
            marginTop:"1rem",
            margin:'1.3rem 1rem',
            width:"300px",
            transition:".6s ease",
            "&:hover":{
              backgroundColor:" #0D2240",
            color:"#D79016",
            }
          }}>Send </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormTrue;
